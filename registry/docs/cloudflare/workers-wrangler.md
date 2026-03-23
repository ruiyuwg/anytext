<!DOCTYPE html>

<html
  lang="en"

data-color-mode="auto" data-light-theme="light" data-dark-theme="dark"
data-a11y-animated-images="system" data-a11y-link-underlines="true"

>

```
:root {
  --tab-size-preference: 4;
}

pre, code {
  tab-size: var(--tab-size-preference);
}





```

{"locale":"en","featureFlags":\["a11y\_status\_checks\_ruleset","actions\_custom\_images\_public\_preview\_visibility","actions\_custom\_images\_storage\_billing\_ui\_visibility","actions\_image\_version\_event","actions\_scheduled\_workflow\_timezone\_enabled","alternate\_user\_config\_repo","arianotify\_comprehensive\_migration","batch\_suggested\_changes","billing\_discount\_threshold\_notification","codespaces\_prebuild\_region\_target\_update","coding\_agent\_model\_selection","coding\_agent\_model\_selection\_all\_skus","contentful\_primer\_code\_blocks","copilot\_agent\_image\_upload","copilot\_agent\_snippy","copilot\_api\_agentic\_issue\_marshal\_yaml","copilot\_ask\_mode\_dropdown","copilot\_chat\_attach\_multiple\_images","copilot\_chat\_clear\_model\_selection\_for\_default\_change","copilot\_chat\_enable\_tool\_call\_logs","copilot\_chat\_file\_redirect","copilot\_chat\_input\_commands","copilot\_chat\_opening\_thread\_switch","copilot\_chat\_reduce\_quota\_checks","copilot\_chat\_repository\_picker","copilot\_chat\_search\_bar\_redirect","copilot\_chat\_selection\_attachments","copilot\_chat\_vision\_in\_claude","copilot\_chat\_vision\_preview\_gate","copilot\_cli\_install\_cta","copilot\_code\_review\_batch\_apply\_suggestions","copilot\_coding\_agent\_task\_response","copilot\_custom\_copilots","copilot\_custom\_copilots\_feature\_preview","copilot\_duplicate\_thread","copilot\_extensions\_hide\_in\_dotcom\_chat","copilot\_extensions\_removal\_on\_marketplace","copilot\_features\_sql\_server\_logo","copilot\_features\_zed\_logo","copilot\_file\_block\_ref\_matching","copilot\_ftp\_hyperspace\_upgrade\_prompt","copilot\_icebreakers\_experiment\_dashboard","copilot\_icebreakers\_experiment\_hyperspace","copilot\_immersive\_embedded","copilot\_immersive\_job\_result\_preview","copilot\_immersive\_layout\_routes","copilot\_immersive\_structured\_model\_picker","copilot\_immersive\_task\_hyperlinking","copilot\_immersive\_task\_within\_chat\_thread","copilot\_mc\_cli\_resume\_any\_users\_task","copilot\_mission\_control\_always\_send\_integration\_id","copilot\_mission\_control\_cli\_resume\_with\_task\_id","copilot\_mission\_control\_decoupled\_mode\_agent\_tooltip","copilot\_mission\_control\_initial\_data\_spinner","copilot\_mission\_control\_scroll\_to\_bottom\_button","copilot\_mission\_control\_task\_alive\_updates","copilot\_mission\_control\_use\_task\_name","copilot\_org\_policy\_page\_focus\_mode","copilot\_redirect\_header\_button\_to\_agents","copilot\_resource\_panel","copilot\_scroll\_preview\_tabs","copilot\_share\_active\_subthread","copilot\_spaces\_ga","copilot\_spaces\_individual\_policies\_ga","copilot\_spaces\_pagination","copilot\_spark\_empty\_state","copilot\_spark\_handle\_nil\_friendly\_name","copilot\_swe\_agent\_hide\_model\_picker\_if\_only\_auto","copilot\_swe\_agent\_pr\_comment\_model\_picker","copilot\_swe\_agent\_use\_subagents","copilot\_task\_api\_github\_rest\_style","copilot\_unconfigured\_is\_inherited","copilot\_usage\_metrics\_ga","copilot\_workbench\_slim\_line\_top\_tabs","custom\_instructions\_file\_references","custom\_properties\_consolidate\_default\_value\_input","dashboard\_add\_updated\_desc","dashboard\_indexeddb\_caching","dashboard\_lists\_max\_age\_filter","dashboard\_universe\_2025\_feedback\_dialog","disable\_soft\_navigate\_turbo\_visit","flex\_cta\_groups\_mvp","global\_nav\_react","global\_nav\_ui\_commands","hyperspace\_2025\_logged\_out\_batch\_1","hyperspace\_2025\_logged\_out\_batch\_2","hyperspace\_2025\_logged\_out\_batch\_3","ipm\_global\_transactional\_message\_agents","ipm\_global\_transactional\_message\_copilot","ipm\_global\_transactional\_message\_issues","ipm\_global\_transactional\_message\_prs","ipm\_global\_transactional\_message\_repos","ipm\_global\_transactional\_message\_spaces","issue\_fields\_global\_search","issue\_fields\_timeline\_events","issue\_fields\_visibility\_settings","issue\_form\_upload\_field\_paste","issues\_dashboard\_inp\_optimization","issues\_dashboard\_semantic\_search","issues\_diff\_based\_label\_updates","issues\_expanded\_file\_types","issues\_index\_semantic\_search","issues\_lazy\_load\_comment\_box\_suggestions","issues\_react\_bots\_timeline\_pagination","issues\_react\_chrome\_container\_query\_fix","issues\_react\_low\_quality\_comment\_warning","issues\_react\_prohibit\_title\_fallback","landing\_pages\_ninetailed","landing\_pages\_web\_vitals\_tracking","lifecycle\_label\_name\_updates","marketing\_pages\_search\_explore\_provider","memex\_default\_issue\_create\_repository","memex\_live\_update\_hovercard","memex\_mwl\_filter\_field\_delimiter","merge\_status\_header\_feedback","mission\_control\_retry\_on\_401","notifications\_menu\_defer\_labels","oauth\_authorize\_clickjacking\_protection","open\_agent\_session\_in\_vscode\_insiders","open\_agent\_session\_in\_vscode\_stable","primer\_react\_css\_has\_selector\_perf","primer\_react\_spinner\_synchronize\_animations","prs\_conversations\_react","prx\_merge\_status\_button\_alt\_logic","pulls\_add\_archived\_false","ruleset\_deletion\_confirmation","sample\_network\_conn\_type","session\_logs\_ungroup\_reasoning\_text","site\_calculator\_actions\_2025","site\_features\_copilot\_universe","site\_homepage\_collaborate\_video","spark\_prompt\_secret\_scanning","spark\_server\_connection\_status","suppress\_automated\_browser\_vitals","suppress\_non\_representative\_vitals","viewscreen\_sandbox","webp\_support","workbench\_store\_readonly"],"copilotApiOverrideUrl":"https://api.githubcopilot.com"}

Releases · cloudflare/workers-sdk · GitHub

```
  Skip to content

  

  
  
  
```

\<react-partial
partial-name="keyboard-shortcuts-dialog"
data-ssr="false"
data-attempted-ssr="false"
data-react-profiling="false"

>

{"props":{"docsUrl":"https://docs.github.com/get-started/accessibility/keyboard-shortcuts"}}

</react-partial>

/\* Override primer focus outline color for marketing header dropdown links for better contrast \*/
\[data-color-mode="light"] .HeaderMenu-dropdown-link:focus-visible,
\[data-color-mode="light"] .HeaderMenu-trailing-link a:focus-visible {
outline-color: var(--color-accent-fg);
}

Navigation Menu

```
Toggle navigation




  
      

        
        


  

  <a class="tmp-mr-lg-3 color-fg-inherit flex-order-2 js-prevent-focus-on-mobile-nav"
    href="/"
    aria-label="Homepage"
    data-analytics-event="{&quot;category&quot;:&quot;Marketing nav&quot;,&quot;action&quot;:&quot;click to go to homepage&quot;,&quot;label&quot;:&quot;ref_page:Marketing;ref_cta:Logomark;ref_loc:Header&quot;}">
    


  

  
      <a
        href="/login?return_to=https%3A%2F%2Fgithub.com%2Fcloudflare%2Fworkers-sdk%2Freleases"
        class="HeaderMenu-link HeaderMenu-button d-inline-flex f5 no-underline border color-border-default rounded-2 px-2 py-1 color-fg-inherit js-prevent-focus-on-mobile-nav"
        data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/cloudflare/workers-sdk/releases&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="dd024793fed2a2a25e03495dc1bd0afcf132b762ad24debe9390bcaba8990e17"
        data-analytics-event="{&quot;category&quot;:&quot;Marketing nav&quot;,&quot;action&quot;:&quot;click to Sign in&quot;,&quot;label&quot;:&quot;ref_page:Marketing;ref_cta:Sign in;ref_loc:Header&quot;}"
      >
        Sign in
      
          
<react-partial-anchor>
    
```

<tool-tip id="tooltip-383e0f06-324c-43b3-aa07-aaf28daa858a" for="icon-button-b9fc2363-6704-4c6f-82e2-084741c41486" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Appearance settings</tool-tip>

\<react-partial
partial-name="appearance-settings"
data-ssr="false"
data-attempted-ssr="false"
data-react-profiling="false"

>

{"props":{}}

</react-partial>

```
</react-partial-anchor>


  




  
        
```

\<react-partial
partial-name="marketing-navigation"
data-ssr="true"
data-attempted-ssr="true"
data-react-profiling="false"

>

{"props":{"should\_use\_dotcom\_links":true}}
PlatformAI CODE CREATIONGitHub CopilotWrite better code with AIGitHub SparkBuild and deploy intelligent appsGitHub ModelsManage and compare promptsMCP RegistryNewIntegrate external toolsDEVELOPER WORKFLOWSActionsAutomate any workflowCodespacesInstant dev environmentsIssuesPlan and track workCode ReviewManage code changesAPPLICATION SECURITYGitHub Advanced SecurityFind and fix vulnerabilitiesCode securitySecure your code as you buildSecret protectionStop leaks before they startEXPLOREWhy GitHubDocumentationBlogChangelogMarketplaceView all featuresSolutionsBY COMPANY SIZEEnterprisesSmall and medium teamsStartupsNonprofitsBY USE CASEApp ModernizationDevSecOpsDevOpsCI/CDView all use casesBY INDUSTRYHealthcareFinancial servicesManufacturingGovernmentView all industriesView all solutionsResourcesEXPLORE BY TOPICAISoftware DevelopmentDevOpsSecurityView all topicsEXPLORE BY TYPECustomer storiesEvents & webinarsEbooks & reportsBusiness insightsGitHub SkillsSUPPORT & SERVICESDocumentationCustomer supportCommunity forumTrust centerPartnersView all resourcesOpen SourceCOMMUNITYGitHub SponsorsFund open source developersPROGRAMSSecurity LabMaintainer CommunityAcceleratorGitHub StarsArchive ProgramREPOSITORIESTopicsTrendingCollectionsEnterpriseENTERPRISE SOLUTIONSEnterprise platformAI-powered developer platformAVAILABLE ADD-ONSGitHub Advanced SecurityEnterprise-grade security featuresCopilot for BusinessEnterprise-grade AI featuresPremium SupportEnterprise-grade 24/7 supportPricing{"resolvedServerColorMode":"day"} </react-partial>

<qbsearch-input class="search-input" data-scope="repo:cloudflare/workers-sdk" data-custom-scopes-path="/search/custom_scopes" data-delete-custom-scopes-csrf="KvZpNCZ8stNUpQqM4EjwRKbX0iIsdBs2pu0jJ0yO7SIijiUcEBL7H8Hpl2axMxc51rhJOJfCFWuQ5fdMuMSYlw" data-max-custom-scopes="10" data-header-redesign-enabled="false" data-initial-value="" data-blackbird-suggestions-path="/search/suggestions" data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations" data-current-repository="cloudflare/workers-sdk" data-current-org="cloudflare" data-current-owner="" data-logged-in="false" data-copilot-chat-enabled="false" data-nl-search-enabled="false" data-retain-scroll-position="true">
  <div
    class="search-input-container search-with-dialog position-relative d-flex flex-row flex-items-center tmp-mr-4 rounded"
    data-action="click:qbsearch-input#searchInputContainerClicked"
  >
      <button
        type="button"
        class="header-search-button placeholder  input-button form-control d-flex flex-1 flex-self-stretch flex-items-center no-wrap width-full py-0 pl-2 pr-0 text-left border-0 box-shadow-none"
        data-target="qbsearch-input.inputButton"
        aria-label="Search or jump to…"
        aria-haspopup="dialog"
        placeholder="Search or jump to..."
        data-hotkey=s,/
        autocapitalize="off"
        data-analytics-event="{&quot;location&quot;:&quot;navbar&quot;,&quot;action&quot;:&quot;searchbar&quot;,&quot;context&quot;:&quot;global&quot;,&quot;tag&quot;:&quot;input&quot;,&quot;label&quot;:&quot;searchbar_input_global_navbar&quot;}"
        data-action="click:qbsearch-input#handleExpand"
      >

```
    Search or jump to...
      
        
      
  



```

  <modal-dialog data-action="close:qbsearch-input#handleClose cancel:qbsearch-input#handleClose" data-target="qbsearch-input.searchSuggestionsDialog" role="dialog" id="search-suggestions-dialog" aria-modal="true" aria-labelledby="search-suggestions-dialog-header" data-view-component="true" class="Overlay Overlay--width-large Overlay--height-auto">
      Search code, repositories, users, issues, pull requests...

```
              <div class="search-suggestions position-fixed width-full color-shadow-large border color-fg-default color-bg-default overflow-hidden d-flex flex-column query-builder-container"
      style="border-radius: 12px;"
      data-target="qbsearch-input.queryBuilderContainer"
      hidden
    >
      
```

  <query-builder data-target="qbsearch-input.queryBuilder" id="query-builder-query-builder-test" data-filter-key=":" data-view-component="true" class="QueryBuilder search-query-builder">

```
    Search
  
  <div
    class="QueryBuilder-StyledInput width-fit "
    data-target="query-builder.styledInput"
  >
      
        


      
    
      <div
        aria-hidden="true"
        class="QueryBuilder-StyledInputContent"
        data-target="query-builder.styledInputContent"
      >
      
        
        <input id="query-builder-test" name="query-builder-test" value="" autocomplete="off" type="text" role="combobox" spellcheck="false" aria-expanded="false" aria-describedby="validation-6410f149-c65b-4ae6-99e4-52cac156cd60" data-target="query-builder.input" data-action="
      input:query-builder#inputChange
      blur:query-builder#inputBlur
      keydown:query-builder#inputKeydown
      focus:query-builder#inputFocus
    " data-view-component="true" class="FormControl-input QueryBuilder-Input FormControl-medium" />
      
    
      
        Clear
        <button role="button" id="query-builder-test-clear-button" aria-labelledby="query-builder-test-clear query-builder-test-label" data-action="
              click:query-builder#clear
              focus:query-builder#clearButtonFocus
              blur:query-builder#clearButtonBlur
            " variant="small" type="button" data-view-component="true" class="Button Button--iconOnly Button--invisible Button--medium mr-1 px-2 py-0 d-flex flex-items-center rounded-1 color-fg-muted">  




      
  
  











































































































































































































    
                    <ul
          role="listbox"
          class="ActionListWrap QueryBuilder-ListWrap"
          aria-label="Suggestions"
          data-action="
            combobox-commit:query-builder#comboboxCommit
            mousedown:query-builder#resultsMousedown
          "
          data-target="query-builder.resultsList"
          data-persist-list=false
          id="query-builder-test-results"
          tabindex="-1"
        >

    
  
    
      


    
    

```

</query-builder>

```
        Search syntax tips            
      
    


```

</modal-dialog>

<dialog-helper>

```
    Provide feedback
  
    


  






  <scrollable-region data-labelled-by="feedback-dialog-title">
            
      We read every piece of feedback, and take your input very seriously.
      
      
      Include my email address so I can be contacted

  </scrollable-region>
                Cancel

          Submit feedback
```

</dialog-helper>

```
<custom-scopes data-target="qbsearch-input.customScopesManager">
```

<dialog-helper>

```
    Saved searches
  
    Use saved searches to filter your results more quickly


  






  <scrollable-region data-labelled-by="custom-scopes-dialog-title">
            

    
    
      

      

      
        Name
        <auto-check src="/search/custom_scopes/check_name" required>
          <input
            type="text"
            name="custom_scope_name"
            id="custom_scope_name"
            data-target="custom-scopes.customScopesNameField"
            class="form-control"
            autocomplete="off"
            placeholder="github-ruby"
            required
            maxlength="50">
          
        </auto-check>
      

      
        Query
        <input
          type="text"
          name="custom_scope_query"
          id="custom_scope_query"
          data-target="custom-scopes.customScopesQueryField"
          class="form-control"
          autocomplete="off"
          placeholder="(repo:mona/a OR repo:mona/b) AND lang:python"
          required
          maxlength="500">
      

      
        To see all available qualifiers, see our documentation.
      
    

    
      
    


  </scrollable-region>
                Cancel

          Create saved search
```

</dialog-helper>
    </custom-scopes>

</qbsearch-input>

```
          <a
            href="/login?return_to=https%3A%2F%2Fgithub.com%2Fcloudflare%2Fworkers-sdk%2Freleases"
            class="HeaderMenu-link HeaderMenu-link--sign-in HeaderMenu-button flex-shrink-0 no-underline d-none d-lg-inline-flex border border-lg-0 rounded px-2 py-1"
            style="margin-left: 12px;"
            data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/cloudflare/workers-sdk/releases&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="dd024793fed2a2a25e03495dc1bd0afcf132b762ad24debe9390bcaba8990e17"
            data-analytics-event="{&quot;category&quot;:&quot;Marketing nav&quot;,&quot;action&quot;:&quot;click to go to homepage&quot;,&quot;label&quot;:&quot;ref_page:Marketing;ref_cta:Sign in;ref_loc:Header&quot;}"
          >
            Sign in
          
        

          <a href="/signup?ref_cta=Sign+up&amp;ref_loc=header+logged+out&amp;ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E%2Freleases%2Findex&amp;source=header-repo&amp;source_repo=cloudflare%2Fworkers-sdk"
            class="HeaderMenu-link HeaderMenu-link--sign-up HeaderMenu-button flex-shrink-0 d-flex d-lg-inline-flex no-underline border color-border-default rounded px-2 py-1"
            data-hydro-click="{&quot;event_type&quot;:&quot;authentication.click&quot;,&quot;payload&quot;:{&quot;location_in_page&quot;:&quot;site header menu&quot;,&quot;repository_id&quot;:null,&quot;auth_type&quot;:&quot;SIGN_UP&quot;,&quot;originating_url&quot;:&quot;https://github.com/cloudflare/workers-sdk/releases&quot;,&quot;user_id&quot;:null}}" data-hydro-click-hmac="dd024793fed2a2a25e03495dc1bd0afcf132b762ad24debe9390bcaba8990e17"
            data-analytics-event="{&quot;category&quot;:&quot;Sign up&quot;,&quot;action&quot;:&quot;click to sign up for account&quot;,&quot;label&quot;:&quot;ref_page:/&lt;user-name&gt;/&lt;repo-name&gt;/releases/index;ref_cta:Sign up;ref_loc:header logged out&quot;}"
          >
            Sign up
          

            
<react-partial-anchor>
    
```

<tool-tip id="tooltip-4e08306b-a6a0-4c12-bc8a-653c9a70e691" for="icon-button-8228afad-a362-4de3-9cae-72fab008484e" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Appearance settings</tool-tip>

\<react-partial
partial-name="appearance-settings"
data-ssr="false"
data-attempted-ssr="false"
data-react-profiling="false"

>

{"props":{}}

</react-partial>

```
</react-partial-anchor>


      Resetting focus
    
  




  

    


    You signed in with another tab or window. Reload to refresh your session.
    You signed out in another tab or window. Reload to refresh your session.
    You switched accounts on another tab or window. Reload to refresh your session.

  
```

<tool-tip id="tooltip-262b7efd-8293-4194-a93f-6faa89f0d8e7" for="icon-button-1323a1c7-403d-4a6a-84fe-a886ff17a55c" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Dismiss alert</tool-tip>

```
  {{ message }}








```

  <div
    class="application-main "
    data-commit-hovercards-enabled
    data-discussion-hovercards-enabled
    data-issue-and-pr-hovercards-enabled
    data-project-hovercards-enabled
  >

```
    cloudflare

/

  workers-sdk


Public



    

    
        

  


            
```

Notifications <tool-tip id="tooltip-58870b21-1abd-4e8f-a0a4-1b80f0a7a74b" for="repository-details-watch-button" popover="manual" data-direction="s" data-type="description" data-view-component="true" class="sr-only position-absolute">You must be signed in to change notification settings</tool-tip>

Fork
1.2k

```
      Star
      3.9k





    
  

    



      


  


          


    Code
      




  


          


    Issues
      492




  


          


    Pull requests
      130




  


          


    Discussions
      




  


          


    Actions
      




  


          


    Projects
      




  


          


    Security
      6




  


          


    Insights
      





      <action-menu data-select-variant="none" data-view-component="true">
```

  <focus-group direction="vertical" mnemonics retain>

<tool-tip id="tooltip-8c190b90-0571-47d3-8572-2bf68b5a8024" for="action-menu-6970a960-11d6-455c-96f4-5c145d265ef9-button" popover="manual" data-direction="s" data-type="label" data-view-component="true" class="sr-only position-absolute">Additional navigation options</tool-tip>

<anchored-position data-target="action-menu.overlay" id="action-menu-6970a960-11d6-455c-96f4-5c145d265ef9-overlay" anchor="action-menu-6970a960-11d6-455c-96f4-5c145d265ef9-button" align="start" side="outside-bottom" anchor-offset="normal" popover="auto" data-view-component="true">

```
            <action-list>


    



    
      


    
  
    
      Code
  



    



    
      


    
  
    
      Issues
  



    



    
      


    
  
    
      Pull requests
  



    



    
      


    
  
    
      Discussions
  



    



    
      


    
  
    
      Actions
  



    



    
      


    
  
    
      Projects
  



    



    
      


    
  
    
      Security
  



    



    
      


    
  
    
      Insights
  



```

</action-list>

</anchored-position>  </focus-group> </action-menu>

<turbo-frame id="repo-content-turbo-frame" target="_top" data-turbo-action="advance" class="">

Releases: cloudflare/workers-sdk

Releases
Tags

```
      <input
        id="release-filter"
        type="search"
        name="q"
        class="form-control subnav-search-input width-full"
        value=""
        placeholder="Find a release"
        aria-label="Find a release"
      >
      
      


  
```

Releases · cloudflare/workers-sdk

wrangler@4.76.0

```
  <relative-time class="no-wrap" prefix="" datetime="2026-03-20T07:26:54Z">
    20 Mar 07:26
  </relative-time>



  
  workers-devprod




  
      


      
        wrangler@4.76.0
      
  


  


    7d2661b

  





  

    
      
        


      
      
            This commit was created on GitHub.com and signed with GitHub’s verified signature.
      
    


    
        GPG key ID: B5690EEEBB952194
        
        
        Verified
          <relative-time datetime="2026-03-20 07:23:11 UTC" threshold="PT0S" year="numeric" hour="2-digit" minute="2-digit"></relative-time>
        
      Learn about vigilant mode.
    
  





  <select-panel use_experimental_non_local_form="false" id="select-panel-2a96a534-23fd-43ad-aaf3-713abe7e1fd0" anchor-align="start" anchor-side="outside-bottom" data-select-variant="single" data-fetch-strategy="eventually_local" data-open-on-load="false" data-view-component="true">
```

  <dialog-helper>

```
Compare
  
      


  




  


  
    Choose a tag to compare
  
    


  




          
          <x-banner data-dismiss-scheme="none" data-view-component="true">

  
    


  

  
              Sorry, something went wrong.
```

</x-banner>            
            <remote-input aria-owns="select-panel-2a96a534-23fd-43ad-aaf3-713abe7e1fd0-body" data-target="select-panel.remoteInput" data-view-component="true">
                <primer-text-field class="FormControl width-full FormControl--fullWidth">

```
    Filter


  
    


      



Loading

  

  

  








```

</primer-text-field>
</remote-input>

```
    <focus-group direction="vertical" mnemonics retain>
      <live-region data-target="select-panel.liveRegion"></live-region>
      
        
            <include-fragment data-target="select-panel.includeFragment" loading="lazy" src="/cloudflare/workers-sdk/refs?tag_name=wrangler%404.76.0&amp;experimental=1" accept="text/fragment+html" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

              
                
                  




                
                
                    
                      


                      Sorry, something went wrong.
                    
                





  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>            

```
          No results found
        
    </focus-group>
            
        View all tags
      
```

  </dialog-helper>
</select-panel>    

```
    wrangler@4.76.0
  
    
      
          

      
  



  

    
      

    







    Minor Changes
```

\#12893 782df44 Thanks @gpanders! - Rewrite wrangler containers list to use the paginated Dash API endpoint
wrangler containers list now fetches from the /dash/applications endpoint instead of /applications, displaying results in a paginated table with columns for ID, Name, State, Live Instances, and Last Modified. Container state is derived from health instance counters (active, degraded, provisioning, ready).
The command supports --per-page (default 25) for interactive pagination with Enter to load more and q/Esc to quit, and --json for machine-readable output. Non-interactive environments load all results in a single request.

\#12957 62545c9 Thanks @natewong1313! - Add Stream binding support to Wrangler and workers-utils
Wrangler and workers-utils now recognize the stream binding in configuration, deployment metadata, and generated worker types. This enables projects to declare Stream bindings in wrangler.json and have the binding represented consistently across validation, metadata mapping, and type generation.

\#12848 ce48b77 Thanks @emily-shen! - Enable local explorer by default
This ungates the local explorer, a UI that lets you inspect the state of D1, DO and KV resources locally by visiting /cdn-cgi/explorer during local development.
Note: this feature is still experimental, and can be disabled by setting the env var X\_LOCAL\_EXPLORER=false.

Patch Changes

\#12938 71ab981 Thanks @dario-piotrowicz! - Add backward-compatible autoconfig support for Astro v5 and v4 projects
The astro add cloudflare command in older Astro versions installs the latest adapter version, which causes compatibility issues. This change adds manual configuration logic for projects using Astro versions before 6.0.0:

Astro 6.0.0+: Uses the native astro add cloudflare command (unchanged behavior)
Astro 5.x: Installs @astrojs/cloudflare@12 and manually configures the adapter
Astro 4.x: Installs @astrojs/cloudflare@11 and manually configures the adapter
Astro < 4.0.0: Returns an error prompting the user to upgrade

\#11892 7c3c6c6 Thanks @staticpayload! - Handle registry ports when matching container image digests
Wrangler now strips tags without breaking registry ports when comparing local images to remote digests. This prevents unnecessary pushes for tags like localhost:5000/app:tag.

Updated dependencies \[3c988e2, d028ffb, cb71403, 3a1c149, ce48b77, 8729f3d]:

miniflare@4.20260317.1
@cloudflare/unenv-preset@2.16.0

```
      <details-toggle>

      
  Assets
  2


        <include-fragment loading="lazy" src="https://github.com/cloudflare/workers-sdk/releases/expanded_assets/wrangler@4.76.0" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

    



Loading






  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>
</details-toggle>

```
All reactions



      
      
    
  



      
```

miniflare@4.20260317.1

```
  <relative-time class="no-wrap" prefix="" datetime="2026-03-20T07:27:09Z">
    20 Mar 07:27
  </relative-time>



  
  workers-devprod




  
      


      
        miniflare@4.20260317.1
      
  


  


    7d2661b

  





  

    
      
        


      
      
            This commit was created on GitHub.com and signed with GitHub’s verified signature.
      
    


    
        GPG key ID: B5690EEEBB952194
        
        
        Verified
          <relative-time datetime="2026-03-20 07:23:11 UTC" threshold="PT0S" year="numeric" hour="2-digit" minute="2-digit"></relative-time>
        
      Learn about vigilant mode.
    
  





  <select-panel use_experimental_non_local_form="false" id="select-panel-0982fd17-d539-431e-aa03-ccc3eeee87b8" anchor-align="start" anchor-side="outside-bottom" data-select-variant="single" data-fetch-strategy="eventually_local" data-open-on-load="false" data-view-component="true">
```

  <dialog-helper>

```
Compare
  
      


  




  


  
    Choose a tag to compare
  
    


  




          
          <x-banner data-dismiss-scheme="none" data-view-component="true">

  
    


  

  
              Sorry, something went wrong.
```

</x-banner>            
            <remote-input aria-owns="select-panel-0982fd17-d539-431e-aa03-ccc3eeee87b8-body" data-target="select-panel.remoteInput" data-view-component="true">
                <primer-text-field class="FormControl width-full FormControl--fullWidth">

```
    Filter


  
    


      



Loading

  

  

  








```

</primer-text-field>
</remote-input>

```
    <focus-group direction="vertical" mnemonics retain>
      <live-region data-target="select-panel.liveRegion"></live-region>
      
        
            <include-fragment data-target="select-panel.includeFragment" loading="lazy" src="/cloudflare/workers-sdk/refs?tag_name=miniflare%404.20260317.1&amp;experimental=1" accept="text/fragment+html" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

              
                
                  




                
                
                    
                      


                      Sorry, something went wrong.
                    
                





  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>            

```
          No results found
        
    </focus-group>
            
        View all tags
      
```

  </dialog-helper>
</select-panel>    

```
    miniflare@4.20260317.1
  
    
      
          

      
  



  

    
      

    







    Minor Changes
```

\#12972 cb71403 Thanks @NuroDev! - Add worker filtering to the local explorer UI
When multiple workers share a dev registry, all their bindings were previously shown together in a single flat list. The explorer now shows a worker selector dropdown, letting you inspect each worker's bindings independently.
The selected worker is reflected in the URL as a ?worker= search param, so deep links work correctly. By default the explorer selects the worker that is hosting the dashboard itself.

\#12888 3a1c149 Thanks @emily-shen! - Add R2 support to the local explorer.
The local explorer now supports the following:

Viewing, modifying & deleting objects
Uploading files
Creating directories / prefixes

Note: The local explorer is an experimental WIP feature that is now enabled by default. This can still be opt-ed out of by using X\_LOCAL\_EXPLORER=false to disable it.

\#12848 ce48b77 Thanks @emily-shen! - Enable local explorer by default
This ungates the local explorer, a UI that lets you inspect the state of D1, DO and KV resources locally by visiting /cdn-cgi/explorer during local development.
Note: this feature is still experimental, and can be disabled by setting the env var X\_LOCAL\_EXPLORER=false.

\#12881 8729f3d Thanks @pombosilva! - Workflow instances now support pause, resume, restart, and terminate in local dev.

<div class="highlight highlight-source-js notranslate position-relative overflow-auto" data-snippet-clipboard-copy-content="const instance = await env.MY_WORKFLOW.create({
  id: &quot;my-instance&quot;,
});

await instance.pause(); // pauses after the current step completes
await instance.resume(); // resumes from where it left off
await instance.restart(); // restarts the workflow from the beginning
await instance.terminate(); // terminates the workflow immediately">const instance = await env.MY\_WORKFLOW.create({
id: "my-instance",
});

await instance.pause(); // pauses after the current step completes
await instance.resume(); // resumes from where it left off
await instance.restart(); // restarts the workflow from the beginning
await instance.terminate(); // terminates the workflow immediately

Patch Changes

\#12960 3c988e2 Thanks @penalosa! - Exclude metadata.sqlite when listing Durable Object instances
An upcoming version of workerd stores per-namespace alarm metadata in a metadata.sqlite file alongside per-actor .sqlite files. The local explorer's DO object listing was treating this file as a Durable Object instance, inflating counts and breaking pagination. This file is now filtered out.

```
      <details-toggle>

      
  Assets
  2


        <include-fragment loading="lazy" src="https://github.com/cloudflare/workers-sdk/releases/expanded_assets/miniflare@4.20260317.1" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

    



Loading






  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>
</details-toggle>

```
All reactions



      
      
    
  



      
```

@cloudflare/workflows-shared@0.7.0

```
  <relative-time class="no-wrap" prefix="" datetime="2026-03-20T07:26:57Z">
    20 Mar 07:26
  </relative-time>



  
  workers-devprod




  
      


      
        @cloudflare/workflows-shared@0.7.0
      
  


  


    7d2661b

  





  

    
      
        


      
      
            This commit was created on GitHub.com and signed with GitHub’s verified signature.
      
    


    
        GPG key ID: B5690EEEBB952194
        
        
        Verified
          <relative-time datetime="2026-03-20 07:23:11 UTC" threshold="PT0S" year="numeric" hour="2-digit" minute="2-digit"></relative-time>
        
      Learn about vigilant mode.
    
  





  <select-panel use_experimental_non_local_form="false" id="select-panel-4507adaa-51cd-4cab-9557-f6d8cf6ba58d" anchor-align="start" anchor-side="outside-bottom" data-select-variant="single" data-fetch-strategy="eventually_local" data-open-on-load="false" data-view-component="true">
```

  <dialog-helper>

```
Compare
  
      


  




  


  
    Choose a tag to compare
  
    


  




          
          <x-banner data-dismiss-scheme="none" data-view-component="true">

  
    


  

  
              Sorry, something went wrong.
```

</x-banner>            
            <remote-input aria-owns="select-panel-4507adaa-51cd-4cab-9557-f6d8cf6ba58d-body" data-target="select-panel.remoteInput" data-view-component="true">
                <primer-text-field class="FormControl width-full FormControl--fullWidth">

```
    Filter


  
    


      



Loading

  

  

  








```

</primer-text-field>
</remote-input>

```
    <focus-group direction="vertical" mnemonics retain>
      <live-region data-target="select-panel.liveRegion"></live-region>
      
        
            <include-fragment data-target="select-panel.includeFragment" loading="lazy" src="/cloudflare/workers-sdk/refs?tag_name=%40cloudflare%2Fworkflows-shared%400.7.0&amp;experimental=1" accept="text/fragment+html" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

              
                
                  




                
                
                    
                      


                      Sorry, something went wrong.
                    
                





  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>            

```
          No results found
        
    </focus-group>
            
        View all tags
      
```

  </dialog-helper>
</select-panel>    

```
    @cloudflare/workflows-shared@0.7.0
  
    
      
          

      
  



  

    
      

    







    Minor Changes
```

\#12881 8729f3d Thanks @pombosilva! - Workflow instances now support pause, resume, restart, and terminate in local dev.

<div class="highlight highlight-source-js notranslate position-relative overflow-auto" data-snippet-clipboard-copy-content="const instance = await env.MY_WORKFLOW.create({
  id: &quot;my-instance&quot;,
});

await instance.pause(); // pauses after the current step completes
await instance.resume(); // resumes from where it left off
await instance.restart(); // restarts the workflow from the beginning
await instance.terminate(); // terminates the workflow immediately">const instance = await env.MY\_WORKFLOW.create({
id: "my-instance",
});

await instance.pause(); // pauses after the current step completes
await instance.resume(); // resumes from where it left off
await instance.restart(); // restarts the workflow from the beginning
await instance.terminate(); // terminates the workflow immediately

```
      <details-toggle>

      
  Assets
  2


        <include-fragment loading="lazy" src="https://github.com/cloudflare/workers-sdk/releases/expanded_assets/@cloudflare/workflows-shared@0.7.0" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

    



Loading






  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>
</details-toggle>

```
All reactions



      
      
    
  



      
```

@cloudflare/workers-utils@0.13.0

```
  <relative-time class="no-wrap" prefix="" datetime="2026-03-20T07:26:44Z">
    20 Mar 07:26
  </relative-time>



  
  workers-devprod




  
      


      
        @cloudflare/workers-utils@0.13.0
      
  


  


    7d2661b

  





  

    
      
        


      
      
            This commit was created on GitHub.com and signed with GitHub’s verified signature.
      
    


    
        GPG key ID: B5690EEEBB952194
        
        
        Verified
          <relative-time datetime="2026-03-20 07:23:11 UTC" threshold="PT0S" year="numeric" hour="2-digit" minute="2-digit"></relative-time>
        
      Learn about vigilant mode.
    
  





  <select-panel use_experimental_non_local_form="false" id="select-panel-91abe45a-681e-4a35-8781-13cb11c399eb" anchor-align="start" anchor-side="outside-bottom" data-select-variant="single" data-fetch-strategy="eventually_local" data-open-on-load="false" data-view-component="true">
```

  <dialog-helper>

```
Compare
  
      


  




  


  
    Choose a tag to compare
  
    


  




          
          <x-banner data-dismiss-scheme="none" data-view-component="true">

  
    


  

  
              Sorry, something went wrong.
```

</x-banner>            
            <remote-input aria-owns="select-panel-91abe45a-681e-4a35-8781-13cb11c399eb-body" data-target="select-panel.remoteInput" data-view-component="true">
                <primer-text-field class="FormControl width-full FormControl--fullWidth">

```
    Filter


  
    


      



Loading

  

  

  








```

</primer-text-field>
</remote-input>

```
    <focus-group direction="vertical" mnemonics retain>
      <live-region data-target="select-panel.liveRegion"></live-region>
      
        
            <include-fragment data-target="select-panel.includeFragment" loading="lazy" src="/cloudflare/workers-sdk/refs?tag_name=%40cloudflare%2Fworkers-utils%400.13.0&amp;experimental=1" accept="text/fragment+html" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

              
                
                  




                
                
                    
                      


                      Sorry, something went wrong.
                    
                





  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>            

```
          No results found
        
    </focus-group>
            
        View all tags
      
```

  </dialog-helper>
</select-panel>    

```
    @cloudflare/workers-utils@0.13.0
  
    
      
          

      
  



  

    
      

    







    Minor Changes
```

\#12957 62545c9 Thanks @natewong1313! - Add Stream binding support to Wrangler and workers-utils
Wrangler and workers-utils now recognize the stream binding in configuration, deployment metadata, and generated worker types. This enables projects to declare Stream bindings in wrangler.json and have the binding represented consistently across validation, metadata mapping, and type generation.

```
      <details-toggle>

      
  Assets
  2


        <include-fragment loading="lazy" src="https://github.com/cloudflare/workers-sdk/releases/expanded_assets/@cloudflare/workers-utils@0.13.0" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

    



Loading






  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>
</details-toggle>

```
All reactions



      
      
    
  



      
```

@cloudflare/vitest-pool-workers@0.13.3

```
  <relative-time class="no-wrap" prefix="" datetime="2026-03-20T07:27:06Z">
    20 Mar 07:27
  </relative-time>



  
  workers-devprod




  
      


      
        @cloudflare/vitest-pool-workers@0.13.3
      
  


  


    7d2661b

  





  

    
      
        


      
      
            This commit was created on GitHub.com and signed with GitHub’s verified signature.
      
    


    
        GPG key ID: B5690EEEBB952194
        
        
        Verified
          <relative-time datetime="2026-03-20 07:23:11 UTC" threshold="PT0S" year="numeric" hour="2-digit" minute="2-digit"></relative-time>
        
      Learn about vigilant mode.
    
  





  <select-panel use_experimental_non_local_form="false" id="select-panel-0313231e-e901-4abb-8fad-a78895e3cb1b" anchor-align="start" anchor-side="outside-bottom" data-select-variant="single" data-fetch-strategy="eventually_local" data-open-on-load="false" data-view-component="true">
```

  <dialog-helper>

```
Compare
  
      


  




  


  
    Choose a tag to compare
  
    


  




          
          <x-banner data-dismiss-scheme="none" data-view-component="true">

  
    


  

  
              Sorry, something went wrong.
```

</x-banner>            
            <remote-input aria-owns="select-panel-0313231e-e901-4abb-8fad-a78895e3cb1b-body" data-target="select-panel.remoteInput" data-view-component="true">
                <primer-text-field class="FormControl width-full FormControl--fullWidth">

```
    Filter


  
    


      



Loading

  

  

  








```

</primer-text-field>
</remote-input>

```
    <focus-group direction="vertical" mnemonics retain>
      <live-region data-target="select-panel.liveRegion"></live-region>
      
        
            <include-fragment data-target="select-panel.includeFragment" loading="lazy" src="/cloudflare/workers-sdk/refs?tag_name=%40cloudflare%2Fvitest-pool-workers%400.13.3&amp;experimental=1" accept="text/fragment+html" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

              
                
                  




                
                
                    
                      


                      Sorry, something went wrong.
                    
                





  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>            

```
          No results found
        
    </focus-group>
            
        View all tags
      
```

  </dialog-helper>
</select-panel>    

```
    @cloudflare/vitest-pool-workers@0.13.3
  
    
      
          

      
  



  

    
      

    







    Patch Changes
```

\#12881 8729f3d Thanks @pombosilva! - Workflows testing util waitForStatus now supports waiting for "terminated" and "paused" states.

Updated dependencies \[782df44, 3c988e2, 62545c9, cb71403, 71ab981, 3a1c149, 7c3c6c6, ce48b77, 8729f3d]:

wrangler@4.76.0
miniflare@4.20260317.1

```
      <details-toggle>

      
  Assets
  2


        <include-fragment loading="lazy" src="https://github.com/cloudflare/workers-sdk/releases/expanded_assets/@cloudflare/vitest-pool-workers@0.13.3" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

    



Loading






  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>
</details-toggle>

```
All reactions



      
      
    
  



      
```

@cloudflare/vite-plugin@1.30.0

```
  <relative-time class="no-wrap" prefix="" datetime="2026-03-20T07:27:03Z">
    20 Mar 07:27
  </relative-time>



  
  workers-devprod




  
      


      
        @cloudflare/vite-plugin@1.30.0
      
  


  


    7d2661b

  





  

    
      
        


      
      
            This commit was created on GitHub.com and signed with GitHub’s verified signature.
      
    


    
        GPG key ID: B5690EEEBB952194
        
        
        Verified
          <relative-time datetime="2026-03-20 07:23:11 UTC" threshold="PT0S" year="numeric" hour="2-digit" minute="2-digit"></relative-time>
        
      Learn about vigilant mode.
    
  





  <select-panel use_experimental_non_local_form="false" id="select-panel-49e35a7d-9d25-4680-bf94-57754923778d" anchor-align="start" anchor-side="outside-bottom" data-select-variant="single" data-fetch-strategy="eventually_local" data-open-on-load="false" data-view-component="true">
```

  <dialog-helper>

```
Compare
  
      


  




  


  
    Choose a tag to compare
  
    


  




          
          <x-banner data-dismiss-scheme="none" data-view-component="true">

  
    


  

  
              Sorry, something went wrong.
```

</x-banner>            
            <remote-input aria-owns="select-panel-49e35a7d-9d25-4680-bf94-57754923778d-body" data-target="select-panel.remoteInput" data-view-component="true">
                <primer-text-field class="FormControl width-full FormControl--fullWidth">

```
    Filter


  
    


      



Loading

  

  

  








```

</primer-text-field>
</remote-input>

```
    <focus-group direction="vertical" mnemonics retain>
      <live-region data-target="select-panel.liveRegion"></live-region>
      
        
            <include-fragment data-target="select-panel.includeFragment" loading="lazy" src="/cloudflare/workers-sdk/refs?tag_name=%40cloudflare%2Fvite-plugin%401.30.0&amp;experimental=1" accept="text/fragment+html" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

              
                
                  




                
                
                    
                      


                      Sorry, something went wrong.
                    
                





  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>            

```
          No results found
        
    </focus-group>
            
        View all tags
      
```

  </dialog-helper>
</select-panel>    

```
    @cloudflare/vite-plugin@1.30.0
  
    
      
          

      
  



  

    
      

    







    Minor Changes
```

\#12848 ce48b77 Thanks @emily-shen! - Enable local explorer by default
This ungates the local explorer, a UI that lets you inspect the state of D1, DO and KV resources locally by visiting /cdn-cgi/explorer during local development.
Note: this feature is still experimental, and can be disabled by setting the env var X\_LOCAL\_EXPLORER=false.

Patch Changes

\#12942 4f7fd79 Thanks @jamesopstad! - Avoid splicing into the middleware stack for Vite versions other than v6
Previously, the plugin spliced its pre-middleware into the Vite middleware stack relative to viteCachedTransformMiddleware. In Vite 8, this middleware can be omitted in some scenarios, which would cause the splice to fail. The plugin now registers pre-middleware using server.middlewares.use() directly, which places it in the correct position for Vite 7+. For Vite 6, the middleware is moved to the correct position in a post hook.

Updated dependencies \[782df44, 3c988e2, 62545c9, d028ffb, cb71403, 71ab981, 3a1c149, 7c3c6c6, ce48b77, 8729f3d]:

wrangler@4.76.0
miniflare@4.20260317.1
@cloudflare/unenv-preset@2.16.0

```
      <details-toggle>

      
  Assets
  2


        <include-fragment loading="lazy" src="https://github.com/cloudflare/workers-sdk/releases/expanded_assets/@cloudflare/vite-plugin@1.30.0" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

    



Loading






  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>
</details-toggle>

```
All reactions



      
      
    
  



      
```

@cloudflare/unenv-preset@2.16.0

```
  <relative-time class="no-wrap" prefix="" datetime="2026-03-20T07:26:48Z">
    20 Mar 07:26
  </relative-time>



  
  workers-devprod




  
      


      
        @cloudflare/unenv-preset@2.16.0
      
  


  


    7d2661b

  





  

    
      
        


      
      
            This commit was created on GitHub.com and signed with GitHub’s verified signature.
      
    


    
        GPG key ID: B5690EEEBB952194
        
        
        Verified
          <relative-time datetime="2026-03-20 07:23:11 UTC" threshold="PT0S" year="numeric" hour="2-digit" minute="2-digit"></relative-time>
        
      Learn about vigilant mode.
    
  





  <select-panel use_experimental_non_local_form="false" id="select-panel-ca2a796b-1460-4f21-90bf-d30790a54fe2" anchor-align="start" anchor-side="outside-bottom" data-select-variant="single" data-fetch-strategy="eventually_local" data-open-on-load="false" data-view-component="true">
```

  <dialog-helper>

```
Compare
  
      


  




  


  
    Choose a tag to compare
  
    


  




          
          <x-banner data-dismiss-scheme="none" data-view-component="true">

  
    


  

  
              Sorry, something went wrong.
```

</x-banner>            
            <remote-input aria-owns="select-panel-ca2a796b-1460-4f21-90bf-d30790a54fe2-body" data-target="select-panel.remoteInput" data-view-component="true">
                <primer-text-field class="FormControl width-full FormControl--fullWidth">

```
    Filter


  
    


      



Loading

  

  

  








```

</primer-text-field>
</remote-input>

```
    <focus-group direction="vertical" mnemonics retain>
      <live-region data-target="select-panel.liveRegion"></live-region>
      
        
            <include-fragment data-target="select-panel.includeFragment" loading="lazy" src="/cloudflare/workers-sdk/refs?tag_name=%40cloudflare%2Funenv-preset%402.16.0&amp;experimental=1" accept="text/fragment+html" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

              
                
                  




                
                
                    
                      


                      Sorry, something went wrong.
                    
                





  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>            

```
          No results found
        
    </focus-group>
            
        View all tags
      
```

  </dialog-helper>
</select-panel>    

```
    @cloudflare/unenv-preset@2.16.0
  
    
      
          

      
  



  

    
      

    







    Minor Changes
```

\#12763 d028ffb Thanks @petebacondarwin! - Graduate experimental Node.js module flags to date-gated flags
The following Node.js module compatibility flags are no longer experimental and are now automatically enabled for workers using nodejs\_compat with a compatibility date of 2026-03-17 or later: perf\_hooks, v8, tty, child\_process, worker\_threads, readline, and repl. Each flag can still be explicitly enabled or disabled via the corresponding enable\_/disable\_ compatibility flags.

```
      <details-toggle>

      
  Assets
  2


        <include-fragment loading="lazy" src="https://github.com/cloudflare/workers-sdk/releases/expanded_assets/@cloudflare/unenv-preset@2.16.0" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

    



Loading






  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>
</details-toggle>

```
All reactions



      
      
    
  



      
```

@cloudflare/pages-shared@0.13.117

```
  <relative-time class="no-wrap" prefix="" datetime="2026-03-20T07:27:00Z">
    20 Mar 07:27
  </relative-time>



  
  workers-devprod




  
      


      
        @cloudflare/pages-shared@0.13.117
      
  


  


    7d2661b

  





  

    
      
        


      
      
            This commit was created on GitHub.com and signed with GitHub’s verified signature.
      
    


    
        GPG key ID: B5690EEEBB952194
        
        
        Verified
          <relative-time datetime="2026-03-20 07:23:11 UTC" threshold="PT0S" year="numeric" hour="2-digit" minute="2-digit"></relative-time>
        
      Learn about vigilant mode.
    
  





  <select-panel use_experimental_non_local_form="false" id="select-panel-9578f08f-ddeb-4ade-b1cd-d7a256764f6c" anchor-align="start" anchor-side="outside-bottom" data-select-variant="single" data-fetch-strategy="eventually_local" data-open-on-load="false" data-view-component="true">
```

  <dialog-helper>

```
Compare
  
      


  




  


  
    Choose a tag to compare
  
    


  




          
          <x-banner data-dismiss-scheme="none" data-view-component="true">

  
    


  

  
              Sorry, something went wrong.
```

</x-banner>            
            <remote-input aria-owns="select-panel-9578f08f-ddeb-4ade-b1cd-d7a256764f6c-body" data-target="select-panel.remoteInput" data-view-component="true">
                <primer-text-field class="FormControl width-full FormControl--fullWidth">

```
    Filter


  
    


      



Loading

  

  

  








```

</primer-text-field>
</remote-input>

```
    <focus-group direction="vertical" mnemonics retain>
      <live-region data-target="select-panel.liveRegion"></live-region>
      
        
            <include-fragment data-target="select-panel.includeFragment" loading="lazy" src="/cloudflare/workers-sdk/refs?tag_name=%40cloudflare%2Fpages-shared%400.13.117&amp;experimental=1" accept="text/fragment+html" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

              
                
                  




                
                
                    
                      


                      Sorry, something went wrong.
                    
                





  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>            

```
          No results found
        
    </focus-group>
            
        View all tags
      
```

  </dialog-helper>
</select-panel>    

```
    @cloudflare/pages-shared@0.13.117
  
    
      
          

      
  



  

    
      

    







    Patch Changes
```

Updated dependencies \[3c988e2, cb71403, 3a1c149, ce48b77, 8729f3d]:

miniflare@4.20260317.1

```
      <details-toggle>

      
  Assets
  2


        <include-fragment loading="lazy" src="https://github.com/cloudflare/workers-sdk/releases/expanded_assets/@cloudflare/pages-shared@0.13.117" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

    



Loading






  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>
</details-toggle>

```
All reactions



      
      
    
  



      
```

@cloudflare/local-explorer-ui@0.9.0

```
  <relative-time class="no-wrap" prefix="" datetime="2026-03-20T07:27:12Z">
    20 Mar 07:27
  </relative-time>



  
  workers-devprod




  
      


      
        @cloudflare/local-explorer-ui@0.9.0
      
  


  


    7d2661b

  





  

    
      
        


      
      
            This commit was created on GitHub.com and signed with GitHub’s verified signature.
      
    


    
        GPG key ID: B5690EEEBB952194
        
        
        Verified
          <relative-time datetime="2026-03-20 07:23:11 UTC" threshold="PT0S" year="numeric" hour="2-digit" minute="2-digit"></relative-time>
        
      Learn about vigilant mode.
    
  





  <select-panel use_experimental_non_local_form="false" id="select-panel-4f977e1b-2e45-4645-af1f-849b8efde251" anchor-align="start" anchor-side="outside-bottom" data-select-variant="single" data-fetch-strategy="eventually_local" data-open-on-load="false" data-view-component="true">
```

  <dialog-helper>

```
Compare
  
      


  




  


  
    Choose a tag to compare
  
    


  




          
          <x-banner data-dismiss-scheme="none" data-view-component="true">

  
    


  

  
              Sorry, something went wrong.
```

</x-banner>            
            <remote-input aria-owns="select-panel-4f977e1b-2e45-4645-af1f-849b8efde251-body" data-target="select-panel.remoteInput" data-view-component="true">
                <primer-text-field class="FormControl width-full FormControl--fullWidth">

```
    Filter


  
    


      



Loading

  

  

  








```

</primer-text-field>
</remote-input>

```
    <focus-group direction="vertical" mnemonics retain>
      <live-region data-target="select-panel.liveRegion"></live-region>
      
        
            <include-fragment data-target="select-panel.includeFragment" loading="lazy" src="/cloudflare/workers-sdk/refs?tag_name=%40cloudflare%2Flocal-explorer-ui%400.9.0&amp;experimental=1" accept="text/fragment+html" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

              
                
                  




                
                
                    
                      


                      Sorry, something went wrong.
                    
                





  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>            

```
          No results found
        
    </focus-group>
            
        View all tags
      
```

  </dialog-helper>
</select-panel>    

```
    @cloudflare/local-explorer-ui@0.9.0
  
    Latest
      
          

      
  



  Latest

    
      

    







    Minor Changes
```

\#12972 cb71403 Thanks @NuroDev! - Add worker filtering to the local explorer UI
When multiple workers share a dev registry, all their bindings were previously shown together in a single flat list. The explorer now shows a worker selector dropdown, letting you inspect each worker's bindings independently.
The selected worker is reflected in the URL as a ?worker= search param, so deep links work correctly. By default the explorer selects the worker that is hosting the dashboard itself.

\#12888 3a1c149 Thanks @emily-shen! - Add R2 support to the local explorer.
The local explorer now supports the following:

Viewing, modifying & deleting objects
Uploading files
Creating directories / prefixes

Note: The local explorer is an experimental WIP feature that is now enabled by default. This can still be opt-ed out of by using X\_LOCAL\_EXPLORER=false to disable it.

Patch Changes

\#12918 3de3ce5 Thanks @NuroDev! - Fixed listing internal Cloudflare Durable Object tables.
The internal \_cf\_KV table that is used when using Durable Objects KV storage is now hidden from the table list dropdown in the local explorer as it is not accessible.

```
      <details-toggle>

      
  Assets
  2


        <include-fragment loading="lazy" src="https://github.com/cloudflare/workers-sdk/releases/expanded_assets/@cloudflare/local-explorer-ui@0.9.0" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

    



Loading






  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>
</details-toggle>

```
          <g-emoji alias="heart" fallback-src="https://github.githubassets.com/assets/2764-982dc91ea48a.png" class="social-button-emoji">❤️</g-emoji>
        1
```

<tool-tip id="tooltip-cfe07bfd-0ee7-4183-a6e0-7e3b9b57e35d" for="reactions--reaction_button_component-9878df" popover="manual" data-direction="n" data-type="description" data-view-component="true" class="sr-only position-absolute">acoBOYZ reacted with heart emoji</tool-tip>

```
All reactions



      
          
            <g-emoji alias="heart" fallback-src="https://github.githubassets.com/assets/2764-982dc91ea48a.png" class="social-button-emoji mr-2">❤️</g-emoji>
              1 reaction
          
      
    
  

1 person reacted

      
```

@cloudflare/lint-config-shared@1.2.1

```
  <relative-time class="no-wrap" prefix="" datetime="2026-03-20T07:26:51Z">
    20 Mar 07:26
  </relative-time>



  
  workers-devprod




  
      


      
        @cloudflare/lint-config-shared@1.2.1
      
  


  


    7d2661b

  





  

    
      
        


      
      
            This commit was created on GitHub.com and signed with GitHub’s verified signature.
      
    


    
        GPG key ID: B5690EEEBB952194
        
        
        Verified
          <relative-time datetime="2026-03-20 07:23:11 UTC" threshold="PT0S" year="numeric" hour="2-digit" minute="2-digit"></relative-time>
        
      Learn about vigilant mode.
    
  





  <select-panel use_experimental_non_local_form="false" id="select-panel-fd16cdbb-7141-481f-957c-db23164ccc99" anchor-align="start" anchor-side="outside-bottom" data-select-variant="single" data-fetch-strategy="eventually_local" data-open-on-load="false" data-view-component="true">
```

  <dialog-helper>

```
Compare
  
      


  




  


  
    Choose a tag to compare
  
    


  




          
          <x-banner data-dismiss-scheme="none" data-view-component="true">

  
    


  

  
              Sorry, something went wrong.
```

</x-banner>            
            <remote-input aria-owns="select-panel-fd16cdbb-7141-481f-957c-db23164ccc99-body" data-target="select-panel.remoteInput" data-view-component="true">
                <primer-text-field class="FormControl width-full FormControl--fullWidth">

```
    Filter


  
    


      



Loading

  

  

  








```

</primer-text-field>
</remote-input>

```
    <focus-group direction="vertical" mnemonics retain>
      <live-region data-target="select-panel.liveRegion"></live-region>
      
        
            <include-fragment data-target="select-panel.includeFragment" loading="lazy" src="/cloudflare/workers-sdk/refs?tag_name=%40cloudflare%2Flint-config-shared%401.2.1&amp;experimental=1" accept="text/fragment+html" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

              
                
                  




                
                
                    
                      


                      Sorry, something went wrong.
                    
                





  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>            

```
          No results found
        
    </focus-group>
            
        View all tags
      
```

  </dialog-helper>
</select-panel>    

```
    @cloudflare/lint-config-shared@1.2.1
  
    
      
          

      
  



  

    
      

    







    Patch Changes
```

\#12347 1a1f9e4 Thanks @vicb! - Add an ESLint rule checking that expect is not imported from vitest.
Retrieving expect from the test context is safer for concurrent tests,
so we will standardize on using that.

```
      <details-toggle>

      
  Assets
  2


        <include-fragment loading="lazy" src="https://github.com/cloudflare/workers-sdk/releases/expanded_assets/@cloudflare/lint-config-shared@1.2.1" data-nonce="v2:a2326a4f-15a9-a0be-4c3c-6dda2d2f6ab0" data-view-component="true">

    



Loading






  

          Uh oh!

          There was an error while loading. Please reload this page.
```

</include-fragment>
</details-toggle>

```
All reactions



      
      
    
  



      








  Previous 1 2 3 4 5 &hellip; 99 100 Next



  Previous Next
```

</turbo-frame>

Footer

```
    &copy; 2026 GitHub,&nbsp;Inc.
  



  Footer navigation

  


      
        Terms
      

      
        Privacy
      

      
        Security
      

      
        Status
      

      
        Community
      

      
        Docs
      

      
        Contact
      

      
```

  <cookie-consent-link>
    <button
      type="button"
      class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent"
      data-action="click:cookie-consent-link#showConsentManagement"
      data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;cookies&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;cookies_link_subfooter_footer&quot;}"
    >
       Manage cookies

  </cookie-consent-link>

  <cookie-consent-link>
    <button
      type="button"
      class="Link--secondary underline-on-hover border-0 p-0 color-bg-transparent text-left"
      data-action="click:cookie-consent-link#showConsentManagement"
      data-analytics-event="{&quot;location&quot;:&quot;footer&quot;,&quot;action&quot;:&quot;dont_share_info&quot;,&quot;context&quot;:&quot;subfooter&quot;,&quot;tag&quot;:&quot;link&quot;,&quot;label&quot;:&quot;dont_share_info_link_subfooter_footer&quot;}"
    >
      Do not share my personal information

  </cookie-consent-link>

```
<ghcc-consent id="ghcc" class="position-fixed bottom-0 left-0" style="z-index: 999999"
  data-locale="en"
  data-initial-cookie-consent-allowed=""
  data-cookie-consent-required="false"
></ghcc-consent>









  



You can’t perform that action at this time.





<details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast hx_rsm-dialog hx_rsm-modal">
  
    


  
  
</details-dialog>










<clipboard-copy aria-label="Copy" class="ClipboardButton btn js-clipboard-copy m-2 p-0" data-copy-feedback="Copied!" data-tooltip-direction="w">
  


  


</clipboard-copy>




<clipboard-copy aria-label="Copy" class="ClipboardButton btn btn-invisible js-clipboard-copy m-2 p-0 d-flex flex-justify-center flex-items-center" data-copy-feedback="Copied!" data-tooltip-direction="w">
  


  


</clipboard-copy>








```
