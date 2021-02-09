const express = require("express");
const router = new express.Router();

// //Testing Get Router
// router.get('/about', (req, res) => {
//     res.status(201).send('Hello');
// });

router.get("/about/:str", (req,res) => {
    const str = req.params.str;

    if (str === "Contact us") {
        res.status(201)
            .send("<H1>Contact us</H1>" +
                "<p>You can directly contact us using this number 620826392, or email us on: dibida21@gmail.com</p>");
    } else if (str === "Terms of use") {
        res.status(201)
            .send("<H1>Terms of use</H1>" +
            "<H3>1. Introduction</H3>" +
            "<p>By accessing to Dibida enforcement or tools ,you accept the terms following are including those available by hyperlink ,which are designed to ensure that dibiba works properly for all of its users .These terms of use constitute a legally binding agreement between you and dibida ,and Waali multiservice after acceptance and use of the application .You accept these terms of use by clicking on \" Create an account \" when to check on Dibida app.</p>" +
                "<H3>2. Use dibida</H3>" +
                "<p>As a condition of your use of dibida you agree to: not violate any law ; no r Adjusts publication; not submit ads threatening , abusive , defamatory , obscene or in character indecent ; not to drop or communicate false materials or misleading ; violate any rights of third parties, send spam , or the letters in chain , promoting the schemes pyramid ; distribute viruses or other technologies that may harm to Dibida or the interests or to the property of the users of Dibida ; impose or contribute to impose any unreasonable load on our infrastructure or interfere with the proper functioning of dibida ; copy, modify or distribute the content of any other person without their consent ; use robots, scanners or any other means automated for access to Dibida and to collect the contents to any purpose without our permission in writing express ; gather or collect the information about the user , even including their numbers of phone , address email, without their consent ; copy, modify or distribute rights or the content of the site, services, applications or the tools or the rights copyright and trademark business of Dibida ; sale articles infringing or violating other law copyright , brand or other rights of third party.YOU are only responsible for all the information that you submit to Dibida and all the consequences that could arise from your ad . We we reserve the right, at our discretion , to refuse or remove the content that we deem inappropriate or violate the terms above. We we reserve also the right, at our discretion , to limit the use of a user of Dibida so temporary or permanent , or to refuse registration a user . If we believe that you violate these Terms of Service in any way and / or that you have a behavior the application , we can inform our discretion the other users of Dibida , who have been in contact with you and they recommend to be cautious .</p>" +
                "<H3>3. Abuse of dibida</H3>" +
                "<p>D ibida and her community together watch over the proper functioning of dibida , as well as the safety of her community . Please report any problem , content offensive and policy violations by sending an email or by us touch ant directly on phone . Without limiting other remedies , we can issue the warnings , limit or put an end to our service and remove certain content hosted and take measures legal and technical to keep the users in outside Dibida if we believe they create the problems , carry achieving the rights of others or act in a manner inconsistent with our policy ( including , but not limited to bypass suspensions temporary or permanent , or the harassment of employees of Dibida or other users ). However , if we decide to take one of these steps , remove some content hosted or keep a user in outside Dibida , we have no obligation to monitor the information transmitted or stored on our implementation and tools and we do not accept any liability for content not authorized or illegal on Dibida or the use of Dibida by users.</p>" +
                "<H3>4. Content</H3>" +
                "<p>D ibida contains the content provided by us, you and other users . D ibida is protected by the laws on the right of author and treaties international . The content posted on or through Dibida is protected as being a work group and / or a compilation, pursuant to the rights copyright , laws and conventions international .You agree not to copy, distribute or modify the content of dibida without our express written consent .You do can not decompile or disassemble, reverse engineer or otherwise attempt to discover the source code contained on Dibida. Without limiting this to the above ,you agree not to reproduce , copy, sell , resell or exploit for any purpose that is any aspect of Dibida ( other than your own content ). When you we give the content ,you we grant and declare that you have the right to grant us a non-right exclusive , global, perpetual , irrevocable , sub- license (for multiple titles ) to exercise all the rights copyright , advertising , trademarks, design, basic data and rights of ownership intellectual on the contents or in any media as it is now or later.</p>" +
                "<H3>5. Violations</H3>" +
                "<p>You will need to not publish to content that violates the rights of third parties. This includes ,but are not limited to content that door reached the rights property intellectual such as rights copyright , design and brand (for example ,submitting articles counterfeit for sale). A large number of products of all kinds are offered on dibida by individuals .The parties holders , in particular holders rights of copyright , trademark rights or other rights, may report any advertising likely to cause damage to their rights and submit a request to delete the ad .If a representative legal of party holds us points so correct ,the products bearing damage to rights property intellectual will be removed by Dibida.</p>" +
                "<H3>6. Responsibility</H3>" +
                "<p>Nothing in these conditions limit our liability for reporting fraud , or for death or the injury resulting from our negligence or the negligence of our agents or employees . You agree that you will not hold us responsible for things that other users post or do. We check the publications of users but not are not involved in transactions real between users . Being given that most of the content of Dibida comes from other users , we guarantee no accuracy publications or communications of users or the quality , the safety or the legality of that which is proposed . In any case , we do not accept the liability of any description for the publication of any information unlawful , threatening , abusive, defamatory , obscene or indecent , or any material that violates or infringes the rights of any other person , also including , but not limited to any transmission constituting or encouraging a behavior that would constitute an offense criminal , incur the liability civil or violate a any other way any law applicable. You agree that we can guarantee an access continuously , without error or secure in our services or that defects of the service will be corrected . Although we will do all efforts reasonable to maintain a service uninterrupted , we can not guarantee and we do not give any promise or warranty ( express or implied ) concerning the operation and availability of the Application . In consequence , the extent permitted by the law , we disclaim expressly to all the warranties , representations and conditions, express or implied , including including those of quality market of value sales , of sustainability , of the conformity with specific requirements and those arising from law . We are not responsible for any loss of money (also including profit), good will or of reputation , or any damage particular, indirect or consequential resulting from your use or from your inability to use Dibida , even if you we in notify or if we could reasonably foresee the possibility of such damages.</p>" +
                "<H3>7. Exemption</H3>" +
                "<p>If you have a dispute with one or more users of Dibida , you we exempt ( as well as our officers , directors , agents, subsidiaries , business associates and employees ) of all the claims , demands and damages ( present and future ) of any type and any kind, known or unknown, arising out of or related to any way that it is to such disputes.</p>" +
                "<H3>8. Personal information</H3>" +
                "<p>By using Dibida you c onsentez to the collection , the transfer , storage and use of your information personal by Dibida on servers located in the US, or any other location , as described more in detail in our Policy Privacy . You agree also to receive marketing communications from our part or on the part of associated sites Dibida except if you we say that you prefer not to receive from such communications.</p>" +
                "<H3>9. Resolution of Disputes</H3>" +
                "<p>In case of dispute between you and Dibida we you encourage strongly to our contact in the first place to look for a solution amicably.</p>" +
                "<H3>10. General</H3>" +
                "<p>These conditions and other policies published on Dibida constitute the entirety of the agreement between Dibida and you ,replacing any agreement earlier .No relationship of agency , of partnership , business related , employee-employer or of franchisee-franchisor is intended or created by this Agreement. We can put update this Agreement at any time, updates taking effect at the time of your next publication or within 30 days following the publication of the updated policy on the application.</p>");
    } else if (str === "Privacy Policy") {
        res.status(201)
            .send("<H1>Policy Privacy</H1>" +
                "<H3>1. General information</H3>" +
                "<p>The present Policy of Privacy describes the policy Dibida regarding the collection , use the backup , sharing and protecting your data personal ( \"Policy Privacy \"). This Privacy Policy applies to the dibida application .</p>" +
                "<H3>2. Framework and agreement</H3>" +
                "<p>By using dibida , you give your explicit consent to dibida for the collection , use , disclosure and retention of your personal information by us, as described in this Privacy Policy and our Terms of Use.D ibida can make changes that the present policy Privacy time to time.We you recommend to consult regularly . If we bring the changes we consider important , we you to notify by means of our implementation . The policy of confidentiality modified enter into force immediately after its first publication purposes . The present policy of confidentiality between in force the 15 Fevrier 2021 .</p>" +
                "<H3>3. The data collected on our application</H3>" +
                "<p>You can visit our app without registering an account . When you choose us to provide your data personal , you agree to this that such information be sent and stored on our servers . Here are the types of information we collect :</p>" +
                "<H3>4. Information collected automatically</H3>" +
                "<p>When you telechargez our implementation , use our services and / or respond to ads or other content we collect automatically the information provided by your computer , your phone laptop or other types of devices providing access to the site. These information include , but not are not limited to: </p>" +
                "<ul>" +
                "<li>Information after your interaction with our website and our services, also including , but not limited to, the ID of the device , type of device , the information of geolocation , the information on the computer and the connection , the statistics on page views , the traffic to and from www.marche.gratis, the URL to reference the data of the ads , the address IP and information standard Web log; and</li>" +
                "<li>Information collected through cookies, web beacons and other similar technologies . Information that you we provide , we collect and will store any information that you enter on our website or that you provide in using our services. This information includes , but is not limited to:</li>" +
                "<li>Information required during of your registration on the application or of the use of the Services, such as : your name, number of phone , address email, number of telephone or information financial ;</li>" +
                "<li>Information extra that you can we provide via networks social or other services Integrated .</li>" +
                "<li>Information provided following the resolution of a dispute , email sent to our application or to our physical address ; and</li>" +
                "<li>Information on your location and that of your equipment , it included the number identifying one of your device , if you have activated the service on your device mobile;</li>" +
                "<li>Information from other sources: we can receive or collect the information further you about , from third parties and integrate to our information about your account . These information include , but without it limited to: data demographic , the data navigation, the data contact additional and data further you about from other sources, such as the authorities state , in the me sour permitted by the law .</li>" +
                "</ul>" +
                "<H3>5. Use of data concerning you</H3>" +
                "<p>You agree that your personal data ( see above) will be used for:</p>" +
                "<ul>" +
                "<li>Guarantee you access to our Services and Customer Support via email or phone ;</li>" +
                "<li>Prevent , detect or investigate the activities potentially prohibited or illegal , the fraud and abuses it to safety and enforce our Terms Use ;</li>" +
                "<li>Personalize , measure and improve our Services, content and ads .</li>" +
                "<li>You contact by email, you send notifications, messages (SMS) or by phone for you investigate the quality of our services;</li>" +
                "<li>For targeted marketing activities , updates, and promotional offers based on your message preferences ( if applicable ), or for any other purpose, as mentioned in this Privacy Policy ;</li>" +
                "<li>Provide you with other requested services as set out in the information we have collected .</li>" +
                "</ul>" +
                "<H3>6. Information sharing</H3>" +
                "<p>We can you offer Services Registration that you allow access to the application with your credentials . If you we give access to your data personal stored on third party sites, the extent of access to such information personal will vary according to the application and will be determined at the time by the settings of your browser and your consent . Transfer of your information personal to others: We may disclose your information personal to third parties pursuant to this Policy Privacy and the laws and regulations applicable . As mentioned later in Section 4, we will not disclose your personal data to third parties wishing to use it for commercial purposes without having previously received your express consent . We may share your personal data with:</p>" +
                "<ul>\n" +
                "<li>The suppliers with whom we have signed a contract and with whom we are working to improve our services on the application , such as providers of financial services, the agencies marketing and technical support. In such cases , personal data must remain under the control of dibida.</li>" +
                "<li>Some third parties ( such as holders of rights property intellectual , the authorities of control , the government tax , the investor , the police and other authorities regulations ) if we are are obliged by the law or in accordance with our Policy Privacy.</li>" +
                "<li>We may share your personal data : To comply with a legal obligation or a judicial decision  ; or</li>" +
                "<li>If it proves necessary for the prevention , the detection or the prosecution court against a misdemeanor criminal , such as fraud , the deceit , the prosecution , or</li>" +
                "<li>If it proves necessary to respect our policy or for the protection of rights and freedoms individual ;</li>" +
                "<li>To other third parties with whom you have consented to share your personal data via ( same as above applies ), eg .. as part of a collaboration.</li>" +
                "<li>For companies with which we have the intention to merge in a context of reorganization or who have purchased our company ;.</li>" +
                "<li>In a holder of property intellectual , if it holds right of ownership intellectual or a or an intermediate in good faith believes that an ad violates the owner's rights. Before providing any information personal , the owner of the address IP will conclude an agreement stipulating , among other , that the information is only provided with the strict condition that the -ci be used exclusively in the context of a procedure judicial and / or in order to obtain legal advice and / or to answer questions from the advertiser concerned.</li>" +
                "</ul>" +
                "<p>Without us restrict any that which precedes , we we are committed also - in our efforts to respect your life private and to protect the application c GAINST any person or party malicious - not to disclose your data personal to third parties without a decision of justice or a request official of the government according to the the oi applicable, except if we believe in good faith that such disclosure ( i ) is necessary for the purposes of, or in connection with, any procedural justice (which included the procedures judicial potential ), for the purpose of obtaining advice legal or is necessary for the purposes of establishing , exercising or to defend the rights legal , (ii) is necessary to prevent or to the detection of the crime, the capture or the prosecution of offenders , or in the assessment or the collection of taxes or fees, (iii) is requested by a body exercising the functions of regulating public.</p>" +
                "<H3>7. Information shared Dibida</H3>" +
                "<p>Our app allows the users to share the ads and other kinds of information with other users , and allowing for these users to have access to the information shared . Since our app you allows also to get directly in touch with a buyer or a seller , we you recommend good care to the way in which you share your data personal with others . You are the sole and exclusive responsibility of the data that you share on implementation and therefore we can guarantee the character private or the security of the data that you have shared with other users.</p>" +
                "<H3>8. Fins commercial</H3>" +
                "<p>You agree that we may use the information collected by us to you send the offers , customized or not, or to you contact by phone about the products or services offered by Dibida or the companies working with Dibida . We are not going neither sell , nor lend your data personal to third parties as part of their campaigns marketing without your agreement on purpose . We may combine your information with information we collect from other companies and use it to improve and personalize our services and features.</p>" +
                "<H3>9. Protection and safeguard of your personal information</H3>" +
                "<p>We protect your information by using the measures of security techniques and administrative ( such as firewalls, the encryption of data and controls access physical and administrative to data and servers ) that limit the risk of loss , abuse , access to non- authorized , disclosure and alteration . However , if you think being a victim of a hacking , please we contact .We will store the data in the limits permitted by the regulations in force and delete when they do are more useful for the reasons described above.</p>" +
                "<H3>10. Other information</H3>" +
                "<H5>Abuse and communications trade not solicited ( \"spam\" )</H5>" +
                "<p>We tolerate any form of abuse enforcement . There you are allowed to add other users to Dibida on your list mailing (email or mail postal) for purposes trade , even if a user has purchased a thing of you , except if it has given its agreement on purpose . If you are witness of an abuse or a fraud on our app , thank you to inform .It is also forbidden to use our tools of communication available to users to send spam or the content that violates our Terms of Use in any other way. For your security , we may scan messages automatically and check for spam, viruses, phishing, and other malicious activity or illegal or prohibited content . The messages we send through these resources , are saved for a period of time limited.</p>" +
                "<H5>Third</H5>" +
                "<p>Unless otherwise explicitly in this Policy Privacy Policy , this Policy Privacy Policy applies only to the use and transfer of information that we collect from of you . Dibida has no control over the privacy policies put in place by third parties and which may apply to you . When we collaborate with third parties or make call to their tools , we indicate explicitly what policy privacy you respect . As a result , we you encourage strongly to ask questions and you learn before to share your data personal with others.</p>");
    } else if (str === "Publication rules") {
        res.status(201)
            .send("<H1>Publication rules</H1>" +
                "<p>For the safety and comfort of users Dibida , our team is particularly attention to it that all the ads published comply with our rules . To avoid that your ad will be blocked or put on standby to be examined , please read carefully the rules following before to publish an ad :</p>" +
                "<ul>" +
                "<li>All the ads should be placed in line with a picture no watermark ( except for classes jobs and services)   </li>" +
                "<li>All the ads should have the numbers of telephone and address email valid </li>" +
                "<li>All the products and services must be actual , acquired legally (not stolen ) and located in Guinea </li>" +
                "<li>The description of the ad should be clear and concise and the photo should clearly illustrate the product or service offered </li>" +
                "<li>The description of the ad does may not include links to third party websites </li>" +
                "<li>It is not allowed to put several products or services in the same advertisement : each article must be published separately ( except for sets, for example , tableware , etc.) </li>" +
                "<li>The ads posted in doubles are prohibited : you do can not publish an ad with the same content that other ad already active on the site </li>" +
                "<li>The deals unrealistic be blocked on the basis of criteria of Dibida </li>" +
                "<li>All articles, products and services considered as illegal in Guinea are prohibited . See the list of illegal items below </li>" +
                "<li>Any abusive content is prohibited ( offensive images or language ) is prohibited </li>" +
                "<li>The announcements asking for donations or to help do are not permitted</li>" +
                "</ul>" +
                "<p><b>Please note that the following items are prohibited on dibida</b></p>" +
                "<ul>" +
                "<li>The weapons : the guns , knives and swords, explosives , the gas tear gas , beatings with fists US , the batons , etc. </li>" +
                "<li>Drugs, alcohol , the drugs , the tobacco and other products related to smoking </li>" +
                "<li>The lights fireworks and products derived </li>" +
                "<li>All product pharmaceutical or medical available only on prescription   </li>" +
                "<li>The species threatened with extinction by virtue of any law local or international , and plants and animals exotic   </li>" +
                "<li>The stones precious </li>" +
                "<li>The organs human </li>" +
                "<li>Counterfeit items </li>" +
                "<li>Copies illegal / pirated in software or elements audiovisual , also including the cards memory or other peripheral storage, eg. DVDs, CDs and books   </li>" +
                "<li>Services psychic , Voodoo or of magic black and tarot services, horoscopes  </li>" +
                "<li>The products natural that claim to cure diseases.   </li>" +
                "<li>The coupons, vouchers and cards of credit </li>" +
                "<li>The content or services sexual explicit </li>" +
                "<li>Sales pyramid and offers jobs to \"work at home\" </li>" +
                "<li>The operations money - the ads featuring the exchange of currency at the current legal </li>" +
                "<li>The deals allow to earn to money quickly</li>" +
                "</ul>" +
                "<p>All articles, products and services considered as illegal in Guinea are forbidden !</p>");
    } else if (str === "Advice to users") {
        res.status(201)
            .send("<H1>User advice</H1>" +
                "<H2>1. Safety advice</H2>" +
                "<H3>Our advice to buy in any security on Dibida</H3>" +
                "<ul>" +
                "<li>Make an appointment with the seller in a public place that you know   </li>" +
                "<li>Do not pay anything before to check the quality of the product that you buy   </li>" +
                "<li>Avoid paying or of transfer of money to advance  </li>" +
                "<li>Beware of too low prices  </li>" +
                "<li>Do not give out personal information ( bank details , credit / debit card number )  </li>" +
                "</ul>" +
                "<H3>Our advice to sell in any security on Dibida</H3>" +
                "<ul>" +
                "<li>Ask always a number of phone to buyers that you contact through the mail , and check that the -ci is valid  </li>" +
                "<li>Avoid of you get paid via non-services secure to transfer money .  </li>" +
                "<li>Beware of buyers located in abroad , Dibida is a site of purchase and sale of 100% local  </li>" +
                "<li>Do not send ever your article to a buyer before he does you have paid  </li>" +
                "</ul>" +
                "<H2>2. Tips for detecting a fraudster</H2>" +
                "<p>Wear a focus particular when :</p>" +
                "<ul>" +
                "<li>The name of the seller or the store is abroad </li>" +
                "<li>The description contains a Skype account , a price in foreign currency ($ or € for example )</li>" +
                "<li>The price is too specific. The fraudsters have a tendency to convert a price in dollars in currency local, that which gives the prices very detailed . </li>" +
                "</ul>" +
                "<p>If you believe an ad is fraudulent ,please contact us.</p>" +
                "<H2>3. How to sell quickly</H2>" +
                "<ol type='a'>" +
                "<li>Choose the right price</li>" +
                "\n" +
                "To choose the right price for your item, you can check out similar listings on the site. More your price will be competitive , the more you sell your item quickly .  \n" +
                "\n" +
                "<li>Write a detailed description</li>" +
                "\n" +
                "A careful description of your product will help the user to well understand this that you sell . Prefer a short and precise title . If your product is damaged , mention it .  \n" +
                "\n" +
                "<li>An ad with photos gets 10 more views !</li>" +
                "\n" +
                "Accompany your product description with one or more good quality photos , preferably from different angles and in good light. You sell your item ten times more quickly !</li>" +
                "</ol>");
    } else {
        res.status(201).send("<H1>Not Valid link provided with end-point : /" + str + " </H1>");
    }
});

module.exports = router;
