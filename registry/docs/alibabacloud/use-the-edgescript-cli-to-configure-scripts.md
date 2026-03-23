Alibaba Cloud provides the EdgeScript (ES) CLI to allow you to publish scripts that are created on premises to the staging and production environments. You can also use the ES CLI to query, modify, and delete scripts in the staging and production environments. This topic describes how to use the ES CLI.

## **Create a local CLI script file**

1.  Create a folder, such as `cdn-api`.
    
2.  Create a text file `aliyun.ini` in the folder to record the authentication information of the Alibaba Cloud RAM user. The following code describes the file content:
    
    ```
    [Credentials]
    accesskeyid = $accesskeyid
    accesskeysecret = $accesskeysecret 
    ```
    
3.  Create a text file `es.py` in the folder to record the Python script code of the ES CLI. The following code describes the file content:
    
    ```
    #!/usr/bin/python
    # -*- coding:utf-8 -*-
    
    import sys, os
    import urllib, urllib2
    import base64
    import hmac
    import hashlib
    from hashlib import sha1
    import time
    import uuid
    import json
    from optparse import OptionParser
    import ConfigParser
    import traceback
    import urllib2
    
    access_key_id = '';
    access_key_secret = '';
    cdn_server_address = 'https://cdn.aliyuncs.com'
    CONFIGFILE = os.getcwd() + '/aliyun.ini'
    CONFIGSECTION = 'Credentials'
    cmdlist = '''
    
       1. Publish the ES rule to the simulated environment or production environment
          ./es.py action=push_test_env domain=<domain> rule='{"pos":"<head|foot>","pri":"0-999","rule_path":"<the es code path>","enable":"<on|off>"}'
          ./es.py action=push_product_env domain=<domain> rule='{"pos":"<head|foot>","pri":"0-999","rule_path":"<the es code path>","enable":"<on|off>","configid":"<configid>"}'
    
       2. Query the ES rule in the simulated environment or production environment
          ./es.py action=query_test_env domain=<domain>
          ./es.py action=query_product_env domain=<domain>
    
       3. Delete the ES rule in the simulated environment or production environment
          ./es.py action=del_test_env domain=<domain> configid=<configid>
          ./es.py action=del_product_env domain=<domain> configid=<configid>
    
       4. Publish the ES rule from the simulated to production environment, or Rollback the ES rule in the simulated environment
          ./es.py action=publish_test_env domain=<domain>
          ./es.py action=rollback_test_env domain=<domain>
    '''
    
    def percent_encode(str):
        res = urllib.quote(str.decode(sys.stdin.encoding).encode('utf8'), '')
        res = res.replace('+', '%20')
        res = res.replace('*', '%2A')
        res = res.replace('%7E', '~')
        return res
    
    def compute_signature(parameters, access_key_secret):
        sortedParameters = sorted(parameters.items(), key=lambda parameters: parameters[0])
    
        canonicalizedQueryString = ''
        for (k,v) in sortedParameters:
            canonicalizedQueryString += '&' + percent_encode(k) + '=' + percent_encode(v)
    
        stringToSign = 'GET&%2F&' + percent_encode(canonicalizedQueryString[1:])
    
        h = hmac.new(access_key_secret + "&", stringToSign, sha1)
        signature = base64.encodestring(h.digest()).strip()
        return signature
    
    def compose_url(user_params):
        timestamp = time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime())
    
        parameters = { \
            'Format'        : 'JSON', \
            'Version'       : '2018-05-10', \
            'AccessKeyId'   : access_key_id, \
            'SignatureVersion'  : '1.0', \
            'SignatureMethod'   : 'HMAC-SHA1', \
            'SignatureNonce'    : str(uuid.uuid1()), \
            'Timestamp'         : timestamp, \
        }
    
        for key in user_params.keys():
            parameters[key] = user_params[key]
    
        signature = compute_signature(parameters, access_key_secret)
        parameters['Signature'] = signature
        url = cdn_server_address + "/?" + urllib.urlencode(parameters)
        return url
    
    def make_request(user_params, quiet=False):
        url = compose_url(user_params)
    
        try:
            req = urllib2.Request(url)
            r = urllib2.urlopen(req)
        except urllib2.HTTPError, err:
            print "Response Code:\n============="
            print err
            body=err.read()
            body_json = json.loads(body)
            body_str =json.dumps(body_json,indent=4)
            print "\nResponse Info:\n=============="
            print body_str
            return
    
        if r.getcode() == 200:
            print "Response Code:\n=============\n200 OK"
        print "\nResponse Info:\n=============="
        body=r.read()
        body_json = json.loads(body)
        body_str =json.dumps(body_json,indent=4)
        print body_str
    
    def configure_accesskeypair(args, options):
        if options.accesskeyid is None or options.accesskeysecret is None:
            print("config miss parameters, use --id=[accesskeyid] --secret=[accesskeysecret]")
            sys.exit(1)
        config = ConfigParser.RawConfigParser()
        config.add_section(CONFIGSECTION)
        config.set(CONFIGSECTION, 'accesskeyid', options.accesskeyid)
        config.set(CONFIGSECTION, 'accesskeysecret', options.accesskeysecret)
        cfgfile = open(CONFIGFILE, 'w+')
        config.write(cfgfile)
        cfgfile.close()
    
    def setup_credentials():
        config = ConfigParser.ConfigParser()
        try:
            config.read(CONFIGFILE)
            global access_key_id
            global access_key_secret
            access_key_id = config.get(CONFIGSECTION, 'accesskeyid')
            access_key_secret = config.get(CONFIGSECTION, 'accesskeysecret')
        except Exception, e:
            print traceback.format_exc()
            print("can't get access key pair, use config --id=[accesskeyid] --secret=[accesskeysecret] to setup")
            sys.exit(1)
    
    def parse_args(user_params):
        req_args = {}
    
        if user_params['action'] == 'push_test_env' or user_params['action'] == 'push_product_env':
            if not user_params.has_key('domain') or not user_params.has_key('rule'):
                parser.print_help()
                sys.exit(0)
    
            data = []
            for rule in user_params['rule']:
                rule_cfg = {
                    'functionId' : 180,
                    'functionName' : 'edge_function',
                    'functionArgs' : []
                }
                for k in rule:
                    arg_cfg = {}
                    if k == 'configid':
                        rule_cfg['configId'] = int(rule[k])
                    elif k == 'rule_path':
                        try:
                            f = open(rule[k], "r")
                            code = f.read()
                        except IOError:
                            print "io error"
                            sys.exit(0)
                        else:
                            f.close()
                        arg_cfg['argName'] = 'rule'
                        arg_cfg['argValue'] = code
                        rule_cfg['functionArgs'].append(arg_cfg)
                    else:
                        arg_cfg['argName'] = k
                        arg_cfg['argValue'] = rule[k]
                        rule_cfg['functionArgs'].append(arg_cfg)
                data.append(rule_cfg)
            rule_str = json.dumps(data)
            
            if user_params['action'] == 'push_test_env':
                req_args = {'Action':'SetCdnDomainStagingConfig', 'DomainName':user_params['domain'], 'Functions':rule_str}
            else:
                req_args = {'Action':'BatchSetCdnDomainConfig', 'DomainNames':user_params['domain'], 'Functions':rule_str}
    
        elif user_params['action'] == 'query_test_env':
            if not user_params.has_key('domain'):
                parser.print_help()
                sys.exit(0)
            req_args = {'Action':'DescribeCdnDomainStagingConfig', 'DomainName':user_params['domain'], 'FunctionNames':'edge_function'}
    
        elif user_params['action'] == 'query_product_env':
            if not user_params.has_key('domain'):
                parser.print_help()
                sys.exit(0)
            req_args = {'Action':'DescribeCdnDomainConfigs', 'DomainName':user_params['domain'], 'FunctionNames':'edge_function'}
    
        elif user_params['action'] == 'del_test_env':
            if not user_params.has_key('domain') or not user_params.has_key('configid'):
                parser.print_help()
                sys.exit(0)
            req_args = {'Action':'DeleteSpecificStagingConfig', 'DomainName':user_params['domain'], 'ConfigId':user_params['configid']}
    
        elif user_params['action'] == 'del_product_env':
            if not user_params.has_key('domain') or not user_params.has_key('configid'):
                parser.print_help()
                sys.exit(0)
            req_args = {'Action':'DeleteSpecificConfig', 'DomainName':user_params['domain'], 'ConfigId':user_params['configid']}
    
        elif user_params['action'] == 'publish_test_env':
            if not user_params.has_key('domain'):
                parser.print_help()
                sys.exit(0)
            req_args = {'Action':'PublishStagingConfigToProduction', 'DomainName':user_params['domain'], 'FunctionName':'edge_function'}
    
        elif user_params['action'] == 'rollback_test_env':
            if not user_params.has_key('domain'):
                parser.print_help()
                sys.exit(0)
            req_args = {'Action':'RollbackStagingConfig', 'DomainName':user_params['domain'], 'FunctionName':'edge_function'}
    
        else:
            parser.print_help()
            sys.exit(0)
    
        return req_args
    
    if __name__ == '__main__':
        parser = OptionParser("%s Action=action Param1=Value1 Param2=Value2 %s\n" % (sys.argv[0], cmdlist))
        parser.add_option("-i", "--id", dest="accesskeyid", help="specify access key id")
        parser.add_option("-s", "--secret", dest="accesskeysecret", help="specify access key secret")
    
        (options, args) = parser.parse_args()
        if len(args) < 1:
            parser.print_help()
            sys.exit(0)
    
        if args[0] == 'help':
            parser.print_help()
            sys.exit(0)
        if args[0] != 'config':
            setup_credentials()
        else: #it's a configure id/secret command
            configure_accesskeypair(args, options)
            sys.exit(0)
    
        user_params = {}
        idx = 1
        if sys.argv[1].lower().startswith('action='):
            _, value = sys.argv[1].split('=')
            user_params['action'] = value
            idx = 2
        else:
            parser.print_help()
            sys.exit(0)
    
        for arg in sys.argv[idx:]:
            try:
                key, value = arg.split('=', 1)
                if key == 'rule': # push_test_env / push_product_env
                    if not user_params.has_key('rule'):
                        user_params['rule'] = []
                    user_params['rule'].append(json.loads(value))
                else:
                    user_params[key.strip()] = value
            except ValueError, e:
                print(e.read().strip())
                raise SystemExit(e)
    
        req_args = parse_args(user_params)
        make_request(req_args)
    ```
    

## **Use the ES CLI**

1.  Configure your AccessKey pair.
    
    ```
    $python ./es.py config --id=AK_ID --secret=AK_SECRET
    $cat aliyun.ini
    
    [Credentials]
    accesskeyid = AccessKey ID
    accesskeysecret = AccessKey secret
    ```
    
2.  Publish a script to the staging or production environment.
    
    ```
    ./es.py action=push_test_env domain=<domain> rule='{"pos":"<head|foot>","pri":"0-999","rule_path":"<the es code path>","enable":"<on|off>"}'
    ./es.py action=push_product_env domain=<domain> rule='{"pos":"<head|foot>","pri":"0-999","rule_path":"<the es code path>","enable":"<on|off>","configid":"<configid>"}'                    
    ```
    
    The following table describes the fields in the script.
    
    **Field**
    
    **Required**
    
    **Description**
    
    enable
    
    Yes
    
    Specifies whether to enable or disable the script. Valid values:
    
    -   **on**
        
    -   **off**
        
    
    pos
    
    Yes
    
    The position in which the script is executed. Valid values:
    
    -   **head**
        
    -   **foot**
        
    
    pri
    
    Yes
    
    The priority of the script. You can prioritize only scripts that are executed in the same position. Valid values: **0 to 999**.
    
    -   The value 0 indicates the highest priority.
        
    -   The value 999 indicates the lowest priority.
        
    
    rule
    
    Yes
    
    The content of the script.
    
    brk
    
    No
    
    Specifies whether to skip subsequent scripts if the current script is executed. Valid values:
    
    -   **on**
        
    -   **off**
        
    
    testip
    
    No
    
    The IP address of the client. By default, this field is empty. If you specify a client IP address, only requests that are sent from the specified IP address can trigger the execution of the script.
    
    option
    
    No
    
    The extension. EdgeScript supports extensions. You can set this field to `_es_dbg=signature` to enable response header debugging.
    
    **Note**
    
    -   A unique configuration ID is generated when you create a configuration for a domain name. You can specify a configuration ID to update or delete the domain name configuration. For information about how to generate, query, and use a configuration ID, see [Usage notes on ConfigId](/help/en/cdn/developer-reference/usage-notes-on-configid).
        
    -   When you create a script, you do not need to specify the configuration ID.
        
    -   If you want to modify a script, you need to specify the configuration ID. You can call a query operation to obtain the configuration ID of the script.
        
    -   You can specify multiple scripts.
        
    
3.  Query scripts in the staging or production environment.
    
    ```
    ./es.py action=query_test_env domain=<domain>
    ./es.py action=query_product_env domain=<domain>
    ```
    
4.  Delete a script from the staging or production environment.
    
    ```
    ./es.py action=del_test_env domain=<domain> configid=<configid>
    ./es.py action=del_product_env domain=<domain> configid=<configid>                  
    ```
    
5.  Publish scripts from the staging environment to the production environment or roll back scripts from the production environment to the staging environment.
    
    ```
    ./es.py action=publish_test_env domain=<domain>
    ./es.py action=rollback_test_env domain=<domain>
    ```
    

For example, you can create, save, test, and publish the m3u8.es script that is used to block all M3U8 requests. For more information, see [Examples on how to use the ES CLI to manage scripts](/help/en/cdn/user-guide/use-the-es-cli-to-manage-scripts#concept-1322689).

## Request header debugging

1.  Perform debugging.
    
    To perform debugging, configure the `_es_dbg` parameter in the Alibaba Cloud CDN console that supports WebIDE or run the following command:
    
    ```
     ./es.py action=push_test_env domain=<domain> rule='{"pos":"<head|foot>","pri":"0-999","rule_path":"<the es code path>","enable":"<on|off>","configid":"<configid>", "option":"_es_dbg=123"}'
    ```
    
2.  Check debugging results.
    
    The `_es_dbg` parameter is contained in the request header, and the value is set to the value of the `_es_dbg` parameter that you specified in the option extension of the script. To view the debugging result, check the following information that is contained in the response header:
    
    TRACE information: `X-DEBUG-ES-TRACE-RULE-{Script ID}`. Check the control flow of the script. The control flow is in the `_Row number_Function name (input parameter):Return value{_Execution duration}` format.
