"use strict";(self.webpackChunkadobe_status=self.webpackChunkadobe_status||[]).push([[450],{65319:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return c}});var o=a(87462),n=a(63366),s=(a(15007),a(64983)),i=a(91515),r=["components"],d={},l={_frontmatter:d},p=i.Z;function c(e){var t=e.components,i=(0,n.Z)(e,r);return(0,s.mdx)(p,(0,o.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"getting-started-with-the-adobe-status-api"},"Getting started with the Adobe Status API"),(0,s.mdx)("p",null,"There are several steps to take before using the Status APIs."),(0,s.mdx)("p",null,"Permissions: Configure permissions for the developer in the Adobe Admin Console.",(0,s.mdx)("br",{parentName:"p"}),"\n","API Client: Create a client configuration in the Adobe Developer Console.",(0,s.mdx)("br",{parentName:"p"}),"\n","Authentication: Obtain the necessary credentials to send data to Adobe.  "),(0,s.mdx)("p",null,"Once the setup is complete you can refer to Product Hierarchy and Sample API calls from the left menu."),(0,s.mdx)("h2",{id:"permissions"},"Permissions"),(0,s.mdx)("p",null,"Before starting to use the Status API, you must make sure that your account has the correct permissions to send requests. Even if you successfully authenticate with an Adobe ID, you cannot make requests to Adobe unless your account contains the correct organization permissions."),(0,s.mdx)("p",null,"Your Organization needs to have entitlements for at least one Adobe product to be able to access Adobe APIs."),(0,s.mdx)("p",null,"Give a developer correct API permissions as a product profile admin:"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Navigate to adminconsole.adobe.com."),(0,s.mdx)("li",{parentName:"ol"},"Check the organization name in the top right to make sure that you are logged in to the correct company."),(0,s.mdx)("li",{parentName:"ol"},"Click Products, then click on any Adobe product that you want to assign permissions to."),(0,s.mdx)("li",{parentName:"ol"},"Select the desired product profile, or create a new product profile."),(0,s.mdx)("li",{parentName:"ol"},"Under the Permissions tab, assign the desired permissions to the product profile."),(0,s.mdx)("li",{parentName:"ol"},"Once the desired permissions are set, click the Developers tab."),(0,s.mdx)("li",{parentName:"ol"},"Click Add Developer, and enter the user name or email address that you want to assign the permissions to."),(0,s.mdx)("li",{parentName:"ol"},"Click Save.\nSee Managing developers in the Enterprise Admin user guide for more information.")),(0,s.mdx)("h2",{id:"api-client"},"API Client"),(0,s.mdx)("p",null,"Once you are a developer for a Adobe product profile, you can create an Sttaus API client in the Adobe Developer Console."),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Login to ",(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/console/home"},"Adobe Developer Console")),(0,s.mdx)("li",{parentName:"ol"},"Create a new project ",(0,s.mdx)("img",{alt:"New Project",src:a(81479)})),(0,s.mdx)("li",{parentName:"ol"},"Add Adobe Status API to the project. Adobe Status API card will show up if there is at least one entitlement for Adobe products/services in your organization, and administrative permission for your org to create integrations. ",(0,s.mdx)("img",{alt:"Add API",src:a(65543)})," ",(0,s.mdx)("img",{alt:"Choose API",src:a(89394)}))),(0,s.mdx)("p",null,"To learn more about creating projects in Adobe Developer Console, read the ",(0,s.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/developer-console/docs/guides/getting-started/"},"Console getting started guide"),".\nAt this point, you decide how you want to authenticate with the API."),(0,s.mdx)("h2",{id:"authentication"},"Authentication"),(0,s.mdx)("p",null,"Status API needs JWT token for authentication. Follow the steps below to setup your access token -"),(0,s.mdx)("ol",null,(0,s.mdx)("li",{parentName:"ol"},"Create a new service account (JWT) credential with key pair ",(0,s.mdx)("img",{alt:"Key Pair",src:a(46211)})),(0,s.mdx)("li",{parentName:"ol"},"Generate key pair and download it. It contains all your app settings, along with the only copy of your private key. Since Adobe does not record your private key, make sure to securely store the downloaded file. ",(0,s.mdx)("img",{alt:"Key Pair Download",src:a(20674)})),(0,s.mdx)("li",{parentName:"ol"},"Select product profile and save the configured Status API ",(0,s.mdx)("img",{alt:"Profile Choose",src:a(70770)})),(0,s.mdx)("li",{parentName:"ol"},"Once client Id and client secret created for you, follow these instructions to generate JWT access token  - ",(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/"},"https://developer.adobe.com/developer-console/docs/guides/authentication/JWT/")," . This token is needed while accessing Adobe Status API. The token is valid for 24 hours after it has been issued.",(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},"To manually generate JWT access token from ",(0,s.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/console/home"},"Developer Console"),", private key is mandatory. Go to your Project -> Service Account (JWT) -> Generate JWT -> Generate custom JWT, paste your private key there and click ‘Generate’. A JWT access token will be generated for you. ",(0,s.mdx)("img",{alt:"Generate JWT",src:a(11374)})," ",(0,s.mdx)("img",{alt:"JWT Result",src:a(99940)})),(0,s.mdx)("li",{parentName:"ul"},"To programmatically generate JWT access token, you will need client ID, technical account ID, Org ID, Client secret and private key. These can be obtained from Project -> Service Account (JWT). Sample codes to generate JWT access token - ",(0,s.mdx)("a",{parentName:"li",href:"https://statusapi-doc-nld2.cloud.adobe.io/#section/Authentication"},"https://statusapi-doc-nld2.cloud.adobe.io/#section/Authentication"),". See API Endpoint Reference section for credentials to access the sample codes. ",(0,s.mdx)("img",{alt:"JWT Credentials",src:a(29216)}))))),(0,s.mdx)("p",null,"Note: A project can include one or more services. In many cases, you will use the same client credentials to access multiple Adobe products and services."),(0,s.mdx)("h2",{id:"product-hierarchy"},"Product Hierarchy"),(0,s.mdx)("p",null,"On Status.adobe.com, the hierarchy for product taxonomy is Adobe Cloud -> Product -> Product Offering -> Business Services -> Regions - > Environments (Where applicable). You will need to call Clouds API to get a list of all Clouds and Products and use those ids to call either the Registry API’s or the Events API’s."),(0,s.mdx)("p",null,"Registry API’s will provide taxonomy details like Product Offerings, Business Services, Regions, Environments, Locales and Event canned Messages. Events API’s will provide events details like ongoing events, events from the past 40 days, and future maintenances, for all Adobe Clouds and Products. The parameters that you can use to call these APIs are defined in the API Endpoint Reference document."),(0,s.mdx)("h2",{id:"sample-api-calls"},"Sample API calls"),(0,s.mdx)("p",null,"Gateway URL: ",(0,s.mdx)("a",{parentName:"p",href:"https://status.adobe.io"},"https://status.adobe.io")),(0,s.mdx)("p",null,"Base URL: ",(0,s.mdx)("a",{parentName:"p",href:"https://status.adobe.io/api/v1/"},"https://status.adobe.io/api/v1/")),(0,s.mdx)("p",null,"API Key: StatusAdobeIOClient"),(0,s.mdx)("p",null,"Example of a complete path for making an API call -"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://status.adobe.io/api/v1/events?api_key=<key> --header 'Authorization: Bearer <JWT token>'\n")),(0,s.mdx)("ul",null,(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Get Product id"),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Go to Registry -> Clouds")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"GET Product id - ",(0,s.mdx)("a",{parentName:"p",href:"https://status.adobe.io/api/v1/clouds?api_key=StatusAdobeIOClient"},"https://status.adobe.io/api/v1/clouds?api_key=StatusAdobeIOClient"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Example"),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://status.adobe.io/api/v1/clouds?cloudId=503460&api_key=<key> --header 'Authorization: Bearer <JWT token>'\n"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"For code samples in Javascript, CLI and Node JS - ",(0,s.mdx)("a",{parentName:"p",href:"https://statusapi-doc-nld2.cloud.adobe.io/#tag/Registry"},"https://statusapi-doc-nld2.cloud.adobe.io/#tag/Registry"))))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Get all ongoing events by Product"),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Go to Events -> All Events")),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"GET events by Product id - ",(0,s.mdx)("a",{parentName:"p",href:"https://status.adobe.io/api/v1/events?api_key=StatusAdobeIOClient&id=%7BProduct_ID%7D"},"https://status.adobe.io/api/v1/events?api_key=StatusAdobeIOClient&id={Product_ID}"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Example"),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://status.adobe.io/api/v1/events?from=2022-11-02&to=2022-11-03&api_key=StatusAdobeIOClient&productIds=503462' --header 'Authorization: Bearer <JWT token>'\n"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"For code samples in Javascript, CLI and Node JS - ",(0,s.mdx)("a",{parentName:"p",href:"https://statusapi-doc-nld2.cloud.adobe.io/#tag/Events"},"https://statusapi-doc-nld2.cloud.adobe.io/#tag/Events"))))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Get all localized event messages for an event"),(0,s.mdx)("ul",{parentName:"li"},(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"GET messages by locale - ",(0,s.mdx)("a",{parentName:"p",href:"https://status.adobe.io/api/v1/messages/en?api_key=StatusAdobeIOClient&languageCode=en"},"https://status.adobe.io/api/v1/messages/en?api_key=StatusAdobeIOClient&languageCode=en"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"Example"),(0,s.mdx)("pre",{parentName:"li"},(0,s.mdx)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://status.adobe.io/api/v1/messages/en?languageCode=en&api_key=<key> --header 'Authorization: Bearer <JWT token>'\n"))),(0,s.mdx)("li",{parentName:"ul"},(0,s.mdx)("p",{parentName:"li"},"For code samples in Javascript, CLI and Node JS - ",(0,s.mdx)("a",{parentName:"p",href:"https://statusapi-doc-nld2.cloud.adobe.io/#tag/Registry/operation/messagesUsingGET_1"},"https://statusapi-doc-nld2.cloud.adobe.io/#tag/Registry/operation/messagesUsingGET_1")))))))}c.isMDXComponent=!0},65543:function(e,t,a){a.r(t),t.default=a.p+"static/add-api-1d529ab74d03891c9efb61e672ff1898.png"},89394:function(e,t,a){a.r(t),t.default=a.p+"static/choose-api-9600fe6db6707a293a4382d8e4f8b81c.png"},29216:function(e,t,a){a.r(t),t.default=a.p+"static/credentials-5e8c7a50f9b98780a888c2907efdacb4.png"},11374:function(e,t,a){a.r(t),t.default=a.p+"static/generate-jwt-99131e9f1b2d83c573794a88da733623.png"},99940:function(e,t,a){a.r(t),t.default=a.p+"static/jwt-result-c421d0d9f8d2c5991bd6cd4dc4cccec8.png"},20674:function(e,t,a){a.r(t),t.default=a.p+"static/key-pair-download-a5b289810c890c5e0f67edccdc229114.png"},46211:function(e,t,a){a.r(t),t.default=a.p+"static/key-pair-efe356cc6b264e98397bfe5d754270a6.png"},81479:function(e,t,a){a.r(t),t.default=a.p+"static/new-project-caacd877eb440c25d65f4d688d8e09ef.png"},70770:function(e,t,a){a.r(t),t.default=a.p+"static/profile-choose-ce3fde99622bad1e9f80bd63fb7149ab.png"}}]);
//# sourceMappingURL=component---src-pages-guides-index-md-645de9347f004b4bf708.js.map