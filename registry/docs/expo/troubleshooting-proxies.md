# Troubleshooting Proxies

Learn about troubleshooting proxies with a set of recommended tools.

## macOS proxy configuration (Sierra)

> If anything goes wrong, you can revert to the "Automatic Proxy settings" in System Network Preferences using Automatic Proxy Configuration `your-corporate-proxy-uri:port-number/proxy.pac`.

### Overview

To run this in the local iOS Simulator while on your corporate Wi-Fi network, a local proxy manager is required. You can use a local proxy application such as [Charles](http://charlesproxy.com).

#### Open macOS network preferences

1. Open `System Preferences` for your Mac (Apple Menu > System Preferences).
2. Go to Network.
3. Be sure your `Location` is set to your proxy network, and not "Automatic".
4. With Wi-Fi selected on the left and/or ethernet connection, click `Advanced...` on the bottom right side of the window.

#### Configure proxy address

1. Disable/uncheck "Automatic Proxy Configuration" if it is set.
2. Check "Web Proxy (HTTP)" and set "Web Proxy Server" to 127.0.0.1 : 8888
3. Check "Secure Web Proxy (HTTPS)" and set "Secure Web Proxy Server" to 127.0.0.1 : 8888

### Configure `Charles`

1. Open Charles

2. If it asks, don't allow it to manage your macOS Network Configuration, the previous steps do that. (If you change Charles port, update the previous step to the correct port instead of default 8888)

3. In the menu of Charles go to `Proxy > External Proxy Settings`, check `Use external proxy servers`

4. Check `Web Proxy (HTTP)`, and enter `your-corporate-proxy-uri:port-number`

5. Check `Proxy server requires a password`

6. Domain: YOUR DOMAIN, Username: YOUR USERNAME Password: YOUR PASSWORD

7. Same for Secure Web Proxy (HTTPS). *Be sure to fill in the same proxy, username, and password address* fields.

8. In the text area for `Bypass external proxies for the following hosts:` enter:

   ```text
   localhost
   *.local
   ```

   You may need to include your mail server or other corporate network addresses.

9. Check "Always bypass external proxies for localhost"

### iOS Simulator configuration

If you have an existing iOS Simulator custom setup going that is not working, "Simulator > Reset Content and Settings" from the menu.

If you have the Simulator open still, quit it.

Now, in Charles under the "Help" menu > Install Charles Root Certificate, and then again for Install Charles Root Certificate in iOS Simulators

> **Technical note:** This whole process is required because the iOS Simulator is served a bum proxy certificate instead of the actual certificate, and doesn't allow it, for <https://exp.host/> which is required to run Expo.\
> **Also note:** Configure applications that need internet access, such as Spotify, to use <http://localhost:8888> as your proxy. Some apps, such as Chrome and Firefox, you can configure in the settings to use your "System Network Preferences" which will use Charles : 8888, or no proxy, depending on how you have your "Location" set in the Apple menu/network preferences. If you are set to "Automatic" no proxy is used, if it is set to "your proxy network" the proxy is used and Charles will need to be running.

## Command line application proxy configuration

npm, git, Brew, Curl, and any other command line applications need proxy access too.

#### For npm

Open `~/.npmrc` and set:

```ini
http_proxy=http://localhost:8888
https_proxy=http://localhost:8888
```

### For git

Open `~/.gitconfig` and set

```ini
[http]
  proxy = http://localhost:8888
[https]
  proxy = http://localhost:8888
```

### For command line applications

Depending on your shell, and config, Open `~/.bashrc`, `~/.bash_profile`, or `~/.zshrc` or wherever you set your shell variables and set:

```bash
export HTTP_PROXY="http://localhost:8888"
export http_proxy="http://localhost:8888"
export ALL_PROXY="http://localhost:8888"
export all_proxy="http://localhost:8888"
export HTTPS_PROXY="http://localhost:8888"
export https_proxy="http://localhost:8888"
```

> If you switch your network location back to "Automatic" to use npm or git, you will need to comment these lines out using a `#` before the line you wish to disable. You could alternatively use a command-line proxy manager if you prefer.

***

# Data and Privacy protection

# Data and Privacy protection

An overview of data and privacy protection policies that Expo offers.

At Expo, our team's aim is to provide developers with tools and services that enable them to create robust and high-quality apps. Our focus is not on gathering huge amounts of data. We only collect a minimal amount of data that aids us in making informed decisions about our products and services. Our ultimate goal is to provide excellent user experiences.

It's crucial that Expo is transparent with its users about the data it collects, how it does so, and why. This is particularly important as more laws, policies, and frameworks are being introduced to regulate how companies handle user data. As a developer, you need to be aware of how the tools you use treat your end users' data to ensure that you comply with relevant laws, frameworks, or guidelines in your industry.

To accomplish this, we provide not only our [privacy policy](https://expo.dev/privacy), (which is most useful if you're a lawyer) and also our [privacy explained page](https://expo.dev/privacy-explained). This page lays out exactly what data Expo collects, both from our developers and your end users, and why we collect it. In all scenarios regarding our users' data, Expo is GDPR-, CCPA-, and Data Privacy Framework-compliant.

Find out more about:

[GDPR compliance and Expo](/regulatory-compliance/gdpr)

[HIPAA compliance and Expo](/regulatory-compliance/hipaa)

[Data Privacy Framework and Expo](https://expo.dev/privacy#international-transfers)

***

# GDPR compliance and Expo

# GDPR compliance and Expo

Learn about how applications built with Expo can be GDPR compliant.

## Are apps built with Expo GDPR compliant?

**They can be! You can build GDPR compliant apps with Expo if you follow the requirements.**

While Expo ensures the proper handling and processing of developer data and end-user data, we cannot guarantee that the developers who build apps with Expo follow similar data privacy practices themselves.

[European Commission's data protection page](https://ec.europa.eu/info/law/law-topic/data-protection_en) — For more information about GDPR, see European Commission's data protection page.

***

# HIPAA compliance and Expo

# HIPAA compliance and Expo

Learn about how applications built with Expo can be HIPAA compliant.

## Are apps built with Expo HIPAA compliant?

**They can be! You can build HIPAA compliant apps with Expo if you follow the requirements.**

Expo doesn't collect any individually identifiable health data, and you can see all the data that Expo collects on [our privacy explained page](https://expo.dev/privacy-explained). That being said, you are ultimately in control of the data you collect from your users, so we cannot guarantee that all apps built with Expo are HIPAA compliant, as in the end, it is up to you as an individual application developer. But there should be no compliance issues with using Expo.

[HHS](https://www.hhs.gov/hipaa/for-professionals/index.html) — For more information about HIPAA compliance, see HHS website.

***

## Other Expo documentation files

- [/llms.txt](https://docs.expo.dev/llms.txt): A list of all available documentation files
- [/llms-eas.txt](https://docs.expo.dev/llms-eas.txt): Complete documentation for Expo Application Services (EAS)
- [/llms-sdk.txt](https://docs.expo.dev/llms-sdk.txt): Complete documentation for the latest Expo SDK
