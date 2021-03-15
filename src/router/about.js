const express = require("express");
const router = new express.Router();

// //Testing Get Router
// router.get('/', (req, res) => {
//     res.status(201).send('Hello');
// });

router.get("/:str", async (req,res) => {
    const str = req.params.str;

    if (str === "Contact us") {
        res.status(201)
            .send("<H1>Contact us</H1>" +
                "<p>You can directly contact us using this number 620826392, or email us on: dibida21@gmail.com</p>");
    } else if (str === "Contactez-nous") {
        res.status(201)
            .send("<H1>Contactez-nous</H1>" +
                "<p>Vous pouvez nous contacter directement en utilisant ce numéro 620826392, ou nous envoyer un courriel à: dibida21@gmail.com</p>");
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
    } else if (str === "Conditions d'utilisation") {
        res.status(201)
            .send("<H1> Conditions d'utilisation </H1>" +
                "<H3> 1. Introduction </H3>" +
                "<p> En accédant à l'application ou aux outils de Dibida, vous acceptez les conditions suivantes, y compris celles disponibles par lien hypertexte, qui sont conçues pour garantir que dibiba fonctionne correctement pour tous ses utilisateurs. Ces conditions d'utilisation constituent un accord juridiquement contraignant entre vous et dibida, et Waali multiservice après acceptation et utilisation de l'application. Vous acceptez ces conditions d'utilisation en cliquant sur \" Créer un compte \" quand vérifier sur l'application Dibida. </p> "+
                "<H3> 2. Utilisez dibida </H3>" +
                "<p> Comme condition de votre utilisation de dibida, vous acceptez de: ne violer aucune loi; non r Ajuster la publication; ne pas soumettre d'annonces menaçantes, injurieuses, diffamatoires, obscènes ou de caractère indécent; ne pas laisser tomber ou communiquer de faux documents ou trompeurs ; violer les droits de tiers, envoyer du spam, ou les lettres en chaîne, promouvoir les systèmes pyramidaux; distribuer des virus ou autres technologies pouvant nuire à Dibida ou aux intérêts ou à la propriété des utilisateurs de Dibida; imposer ou contribuer à imposer toute charge déraisonnable sur notre infrastructure ou interférer avec le bon fonctionnement de dibida; copier, modifier ou distribuer le contenu de toute autre personne sans son consentement; utiliser des robots, des scanners ou tout autre moyen automatisé pour accéder à Dibida et collecter le contenu de tout but sans notre autorisation écrite expresse; recueillir ou collecter les informations sur l'utilisateur, y compris même leurs numéros de téléphone, adresse e-mail, sans leur consentement; copier, modifier ou dés les droits d'hommage ou le contenu du site, des services, des applications ou des outils ou les droits d'auteur et des marques commerciales de Dibida; les articles de vente enfreignant ou violant d'autres droits d'auteur, marques ou autres droits de tiers.Vous n'êtes responsable que de toutes les informations que vous soumettez à Dibida et de toutes les conséquences qui pourraient découler de votre annonce. Nous nous réservons le droit, à notre discrétion, de refuser ou de supprimer le contenu que nous jugeons inapproprié ou enfreindre les conditions ci-dessus. Nous nous réservons également le droit, à notre discrétion, de limiter l'utilisation d'un utilisateur de Dibida de manière temporaire ou permanente, ou de refuser l'enregistrement d'un utilisateur. Si nous pensons que vous enfreignez ces conditions d'utilisation de quelque manière que ce soit et / ou que vous avez un comportement de l'application, nous pouvons informer à notre discrétion les autres utilisateurs de Dibida, qui ont été en contact avec vous et ils recommandent d'être prudents. </p> "+
                "<H3> 3. Abus de dibida </H3>" +
                "<p> D ibida et sa communauté veillent ensemble au bon fonctionnement de dibida, ainsi qu'à la sécurité de sa communauté. Veuillez signaler tout problème, contenu offensant et violation des règles en envoyant un e-mail ou en nous contactant directement par téléphone. Sans limiter les autres recours, nous pouvons émettre des avertissements, limiter ou mettre fin à notre service et supprimer certains contenus hébergés et prendre des mesures juridiques et techniques pour garder les utilisateurs en dehors de Dibida si nous pensons qu'ils créent des problèmes, porter à réaliser les droits de d'autres personnes ou agir d'une manière incompatible avec notre politique (y compris, mais sans s'y limiter, contourner les suspensions temporaires ou permanentes, ou le harcèlement des employés de Dibida ou d'autres utilisateurs). Cependant, si nous décidons de prendre l'une de ces mesures, supprimez certains contenus hébergé ou garder un utilisateur en dehors de Dibida, nous n'avons aucune obligation de surveiller les informations transmises ou stockées sur notre mise en œuvre et nos outils et nous n'acceptons aucune responsabilité pour le contenu non autorisé o r illégal sur Dibida ou l'utilisation de Dibida par les utilisateurs. </p> "+
                "<H3> 4. Contenu </H3>" +
                "<p> D ibida contient le contenu fourni par nous, vous et d'autres utilisateurs. D ibida est protégé par les lois sur le droit d'auteur et les traités internationaux. Le contenu publié sur ou via Dibida est protégé en tant que groupe de travail et / ou une compilation, conformément aux droits d'auteur, lois et conventions internationales. Vous acceptez de ne pas copier, distribuer ou modifier le contenu de dibida sans notre consentement écrit exprès. Vous ne pouvez pas décompiler ou désassembler, faire de l'ingénierie inverse ou tenter autrement de découvrir le code source contenu sur Dibida. Sans limiter cela à ce qui précède, vous acceptez de ne pas reproduire, copier, vendre, revendre ou exploiter à des fins qui relèvent de tout aspect de Dibida (autre que votre propre contenu). Lorsque vous fournissez le contenu, vous nous accordons et déclarons que vous avez le droit de nous accorder une sous-licence non exclusive, globale, perpétuelle, irrévocable (pour plusieurs titres) pour exercer tous les droits d'auteur, publicité, marques, design, données de base et les droits de propriété intellectuelle sur le contenu ou dans tout média tel qu'il est maintenant ou plus tard. </p> "+
                "<H3> 5. Violations </H3>" +
                "<p> Vous n'aurez pas besoin de publier sur du contenu qui enfreint les droits de tiers. Cela inclut, mais sans s'y limiter, le contenu pour lequel la porte a atteint la propriété des droitsy intellectuels tels que les droits d'auteur, le design et la marque (par exemple, la soumission d'articles contrefaits à la vente). Un grand nombre de produits de toutes natures sont proposés sur dibida par des particuliers. Les parties titulaires, notamment titulaires de droits d'auteur, droits de marque ou autres droits, peuvent signaler toute publicité susceptible de porter atteinte à leurs droits et soumettre une demande de suppression du ad .Si un représentant légal du parti nous tient des points si corrects, les produits portant atteinte aux droits de propriété intellectuelle seront supprimés par Dibida. </p> "+
                "<H3> 6. Responsabilité </H3>" +
                "<p> Rien dans ces conditions ne limite notre responsabilité en cas de signalement de fraude, de décès ou de blessure résultant de notre négligence ou de la négligence de nos agents ou employés. Vous acceptez de ne pas nous tenir responsables des choses que d'autres utilisateurs publient ou faire. Nous vérifions les publications des utilisateurs mais ne sommes pas impliqués dans les transactions réelles entre les utilisateurs. Étant donné que la plupart du contenu de Dibida provient d'autres utilisateurs, nous ne garantissons aucune précision des publications ou communications des utilisateurs ou la qualité, la sécurité ou la légalité de ce qui est proposé. Dans tous les cas, nous déclinons la responsabilité de toute description pour la publication d'informations illégales, menaçantes, abusives, diffamatoires, obscènes ou indécentes, ou de tout matériel qui viole ou enfreint les droits de tout autre personne, y compris, mais sans s'y limiter, toute transmission constituant ou encourageant un comportement qui constituerait un délit pénal, engagerait la responsabilité civile ou violerait un quelconque o de toute façon toute loi applicable. Vous acceptez que nous puissions garantir un accès en continu, sans erreur ou sécurisé dans nos services ou que les défauts du service seront corrigés. Bien que nous fassions tous les efforts raisonnables pour maintenir un service ininterrompu, nous ne pouvons garantir et nous ne donnons aucune promesse ou garantie (expresse ou implicite) concernant le fonctionnement et la disponibilité de l'Application. En conséquence, dans la mesure permise par la loi, nous déclinons expressément toutes les garanties, représentations et conditions, expresses ou implicites, y compris y compris celles de marché de qualité des ventes à valeur, de durabilité, de conformité aux exigences spécifiques et celles découlant de la loi. . Nous ne sommes pas responsables de toute perte d'argent (y compris également de profit), de bonne volonté ou de réputation, ou de tout dommage particulier, indirect ou consécutif résultant de votre utilisation ou de votre incapacité à utiliser Dibida, même si vous nous en informez ou si nous pourrait raisonnablement prévoir la possibilité de tels dommages. </p> "+
                "<H3> 7. Exemption </H3>" +
                "<p> Si vous avez un différend avec un ou plusieurs utilisateurs de Dibida, nous vous exonérons (ainsi que nos dirigeants, administrateurs, agents, filiales, associés commerciaux et employés) de toutes les réclamations, demandes et dommages-intérêts (présents et futurs ) de tout type et de toute nature, connus ou inconnus, découlant de ou liés de quelque manière que ce soit à de tels litiges. </p> "+
                "<H3> 8. Informations personnelles </H3>" +
                "<p> En utilisant Dibida, vous c onsentez à la collecte, au transfert, au stockage et à l'utilisation de vos informations personnelles par Dibida sur des serveurs situés aux États-Unis, ou à tout autre endroit, comme décrit plus en détail dans notre Politique de confidentialité. Vous acceptez également pour recevoir des communications marketing de notre part ou de la part des sites associés Dibida sauf si vous nous disons que vous préférez ne pas recevoir de telles communications. </p> "+
                "<H3> 9. Résolution des litiges </H3>" +
                "<p> En cas de litige entre vous et Dibida nous vous encourageons vivement à notre contact en premier lieu pour rechercher une solution à l'amiable. </p>" +
                "<H3> 10. Général </H3>" +
                "<p> Les présentes conditions et autres politiques publiées sur Dibida constituent l'intégralité de l'accord entre Dibida et vous, en remplacement de tout accord antérieur. Aucune relation d'agence, de partenariat, d'entreprise, d'employé-employeur ou de franchisé-franchiseur n'est prévue ou créé par cet accord. Nous pouvons mettre à jour cet accord à tout moment, les mises à jour prenant effet au moment de votre prochaine publication ou dans les 30 jours suivant la publication de la politique mise à jour sur l'application. </p> ");
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
    } else if (str === "Politique de confidentialité") {
        res.status(201)
            .send("<H1> Politique de confidentialité </H1>" +
                "<H3> 1. Informations générales </H3>" +
                "<p> La présente politique de confidentialité décrit la politique de Dibida concernant la collecte, l'utilisation de la sauvegarde, le partage et la protection de vos données personnelles (\" Politique de confidentialité \"). Cette politique de confidentialité s'applique à l'application dibida. </p>" +
    "<H3> 2. Cadre et accord </H3>" +
    "<p> En utilisant dibida, vous donnez votre consentement explicite à dibida pour la collecte, l'utilisation, la divulgation et la conservation de vos informations personnelles par nous, comme décrit dans la présente politique de confidentialité et nos conditions d'utilisation.D ibida peut apporter des modifications que le présente politique de confidentialité de temps à autre.Nous vous recommandons de consulter régulièrement.Si nous apportons les modifications que nous considérons importantes, nous vous en informons par le biais de notre mise en œuvre.La politique de confidentialité modifiée entre en vigueur immédiatement après ses premières fins de publication. Les présentes politique de confidentialité entre en vigueur le 15 Fevrier 2021. </p> "+
    "<H3> 3. Les données collectées sur notre application </H3>" +
    "<p> Vous pouvez visiter notre application sans créer de compte. Lorsque vous nous choisissez de fournir vos données personnelles, vous acceptez que ces informations soient envoyées et stockées sur nos serveurs. Voici les types d'informations que nous collectons: </ p> "+
    "<H3> 4. Informations collectées automatiquement </H3>" +
    "<p> Lorsque vous téléchargez notre mise en œuvre, utilisez nos services et / ou répondez à des publicités ou à tout autre contenu, nous collectons automatiquement les informations fournies par votre ordinateur, votre téléphone portable ou d'autres types d'appareils permettant d'accéder au site. Ces informations comprennent, mais ne sont pas limités à: </p> "+
    "<ul>" +
    "<li> Informations après votre interaction avec notre site Web et nos services, y compris, mais sans s'y limiter, l'ID de l'appareil, le type d'appareil, les informations de géolocalisation, les informations sur l'ordinateur et la connexion, les statistiques sur pages vues, le trafic vers et depuis www.marche.gratis, l'URL pour référencer les données des annonces, l'adresse IP et les informations standard du journal Web; et </li> "+
    "<li> Informations collectées par le biais de cookies, de balises Web et d'autres technologies similaires. Les informations que nous fournissons, nous recueillons et conserverons toutes les informations que vous entrez sur notre site Web ou que vous fournissez en utilisant nos services. Ces informations incluent, mais sont non limité à: </li> "+
    "<li> Informations requises lors de votre inscription sur l'application ou de l'utilisation des Services, telles que: votre nom, numéro de téléphone, adresse email, numéro de téléphone ou informations financières; </li>" +
    "<li> Informations supplémentaires que vous pouvez nous fournir via les réseaux sociaux ou d'autres services intégrés. </li>" +
    "<li> Informations fournies suite à la résolution d'un litige, e-mail envoyé à notre application ou à notre adresse physique; et </li>" +
    "<li> Des informations sur votre emplacement et celui de votre équipement, il comprenait le numéro identifiant l'un de vos appareils, si vous avez activé le service sur votre appareil mobile; </li>" +
    "<li> Informations provenant d'autres sources: nous pouvons recevoir ou collecter des informations sur vous, auprès de tiers et les intégrer à nos informations sur votre compte. Ces informations incluent, mais sans s'y limiter: les données démographiques, la navigation dans les données, le les données de contact supplémentaires et les données vous concernant provenant d'autres sources, telles que les autorités de l'État, dans les conditions autorisées par la loi. </li> "+
    "</ul>" +
    "<H3> 5. Utilisation des données vous concernant </H3>" +
    "<p> Vous acceptez que vos données personnelles (voir ci-dessus) soient utilisées pour: </p>" +
    "<ul>" +
    "<li> Vous garantir l'accès à nos services et à notre assistance client par e-mail ou par téléphone; </li>" +
    "<li> Prévenir, détecter ou enquêter sur les activités potentiellement interdites ou illégales, la fraude et en abuser pour la sécurité et appliquer nos conditions d'utilisation; </li>" +
    "<li> Personnalisez, mesurez et améliorez nos services, notre contenu et nos annonces. </li>" +
    "<li> Vous contactez par e-mail, vous envoyez des notifications, des messages (SMS) ou par téléphone pour vous enquêter sur la qualité de nos services; </li>" +
    "<li> Pour des activités de marketing ciblées, des mises à jour et des offres promotionnelles basées sur vos préférences de message (le cas échéant), ou à toute autre fin, comme indiqué dans la présente politique de confidentialité; </li>" +
    "<li> Vous fournir d'autres services demandés comme indiqué dans les informations que nous avons collectées. </li>" +
    "</ul>" +
    "<H3> 6. Partage d'informations </H3>" +
    "<p> Nous pouvons vous proposer des services d'inscription que vous autorisez l'accès à l'application avec vos informations d'identification. Si vous nous donnez accès à vos données personnelles stockées sur des sites tiers, l'étendue de l'accèsCes informations personnelles varieront en fonction de l'application et seront déterminées à l'époque par les paramètres de votre navigateur et votre consentement. Transfert de vos informations personnelles à des tiers: Nous pouvons divulguer vos informations personnelles à des tiers conformément à la présente politique de confidentialité et aux lois et réglementations applicables. Comme mentionné plus loin dans la section 4, nous ne divulguerons pas vos données personnelles à des tiers souhaitant les utiliser à des fins commerciales sans avoir préalablement reçu votre consentement exprès. Nous pouvons partager vos données personnelles avec: </p> "+
    "<ul> \ n" +
    "<li> Les fournisseurs avec lesquels nous avons signé un contrat et avec lesquels nous travaillons pour améliorer nos services sur l'application, tels que les prestataires de services financiers, les agences marketing et d'assistance technique. Dans de tels cas, les données personnelles doivent rester sous le contrôle de dibida. </li> "+
    "<li> Certains tiers (tels que les titulaires de droits de propriété intellectuelle, les autorités de contrôle, la taxe gouvernementale, l'investisseur, la police et d'autres autorités réglementaires) si nous sommes obligés par la loi ou conformément à notre Politique de confidentialité . </li> "+
    "<li> Nous pouvons partager vos données personnelles: pour nous conformer à une obligation légale ou à une décision judiciaire; ou </li>" +
    "<li> Si cela s'avère nécessaire pour la prévention, la détection ou la poursuite judiciaire contre un délit criminel, tel que fraude, tromperie, poursuite, ou </li>" +
    "<li> S'il s'avère nécessaire pour respecter notre politique ou pour la protection des droits et libertés individuels; </li>" +
    "<li> À d'autres tiers avec lesquels vous avez consenti à partager vos données personnelles via (comme ci-dessus s'applique), par exemple .. dans le cadre d'une collaboration. </li>" +
    "<li> Pour les entreprises avec lesquelles nous avons l'intention de fusionner dans un contexte de réorganisation ou qui ont acheté notre société;. </li>" +
    "<li> Chez un titulaire de propriété intellectuelle, s'il détient un droit de propriété intellectuelle ou un ou un intermédiaire de bonne foi estime qu'une annonce viole les droits du propriétaire. Avant de fournir toute information personnelle, le propriétaire de l'adresse IP conclura un accord stipulant, entre autres, que les informations ne sont fournies qu'à la stricte condition que le -ci soit utilisé exclusivement dans le cadre d'une procédure judiciaire et / ou afin d'obtenir un avis juridique et / ou de répondre aux questions de l'annonceur concerné. </li> "+
    "</ul>" +
    "<p> Sans que nous restreignions tout ce qui précède, nous nous engageons également - dans nos efforts à respecter votre vie privée et à protéger l'application c GAIN DE toute personne ou partie malveillante - à ne pas divulguer vos données personnelles à des tiers sans un décision de justice ou une demande officielle du gouvernement selon l'oi applicable, sauf si nous croyons de bonne foi qu'une telle divulgation (i) est nécessaire aux fins de, ou en relation avec, toute justice procédurale (qui comprenait les procédures potentiel judiciaire), aux fins d'obtenir des conseils juridiques ou est nécessaire aux fins d'établir, d'exercer ou de défendre les droits légaux, (ii) est nécessaire pour empêcher ou pour la détection du crime, la capture ou la poursuite des contrevenants , ou dans l'évaluation ou la perception des taxes ou frais, (iii) est demandée par un organisme exerçant les fonctions de régulation publique. </p> "+
    "<H3> 7. Informations partagées Dibida </H3>" +
    "<p> Notre application permet aux utilisateurs de partager les annonces et d'autres types d'informations avec d'autres utilisateurs, et leur permet d'accéder aux informations partagées. Puisque notre application vous permet également d'entrer directement en contact avec un acheteur ou un vendeur, nous vous recommandons de faire attention à la manière dont vous partagez vos données personnelles avec autrui.Vous êtes la seule et exclusive responsabilité des données que vous partagez lors de la mise en œuvre et par conséquent nous pouvons garantir le caractère privé ou la sécurité des données que vous avez partagé avec d'autres utilisateurs. </p> "+
    "<H3> 8. Fins commercial </H3>" +
    "<p> Vous acceptez que nous puissions utiliser les informations que nous collectons pour vous envoyer les offres, personnalisées ou non, ou pour vous contacter par téléphone sur les produits ou services proposés par Dibida ou les sociétés travaillant avec Dibida. Nous n'y allons pas ne vendez, ni ne prêtez vos données personnelles à des tiers dans le cadre de leurs campagnes de marketing sans votre accord exprès. Nous pouvons combiner vos informations avec des informations que nous recueillons auprès d'autres sociétés et les utiliser pour améliorer et personnaliser nos services et fonctionnalités. </p> "+
    "<H3> 9. Protection et sauvegarde de vos informations personnelles </H3>" +
    "<p> Nous protégeons vos informations en utilisant les mesures de techniques de sécurité et administratives (telles que les pare-feu, le cryptage des données et les contrôles d'accès physical et administratif aux données et serveurs) qui limitent les risques de perte, d'abus, d'accès aux non-autorisés, de divulgation et d'altération. Cependant, si vous pensez être victime d'un piratage, merci de nous contacter. Nous stockerons les données dans les limites autorisées par la réglementation en vigueur et les supprimerons lorsqu'elles le seront plus utiles pour les raisons décrites ci-dessus. </p> "+
    "<H3> 10. Autres informations </H3>" +
    "<H5> Abus et communications non sollicitées (\" spam \") </H5>" +
    "<p> Nous tolérons toute forme de répression des abus. Là, vous êtes autorisé à ajouter d'autres utilisateurs à Dibida sur votre liste de diffusion (e-mail ou courrier postal) à des fins commerciales, même si un utilisateur a acheté une chose de vous, sauf si elle a donné son accord exprès. Si vous êtes témoin d'un abus ou d'une fraude sur notre application, merci de le signaler. Il est également interdit d'utiliser nos outils de communication mis à la disposition des utilisateurs pour envoyer du spam ou le contenu qui enfreint nos Conditions de Utiliser de toute autre manière. Pour votre sécurité, nous pouvons analyser automatiquement les messages et rechercher les spams, virus, hameçonnage et autres activités malveillantes ou contenus illégaux ou interdits. Les messages que nous envoyons via ces ressources sont conservés pendant une période limitée. </p> "+
    "<H5> Troisième </H5>" +
    "<p> Sauf indication contraire explicite dans cette politique de confidentialité, cette politique de confidentialité s'applique uniquement à l'utilisation et au transfert des informations que nous recueillons auprès de vous. Dibida n'a aucun contrôle sur les politiques de confidentialité mises en place par des tiers et qui peuvent s'appliquent à vous. Lorsque nous collaborons avec des tiers ou appelons leurs outils, nous indiquons explicitement la politique de confidentialité que vous respectez. En conséquence, nous vous encourageons vivement à poser des questions et vous apprenez avant à partager vos données personnelles avec d'autres. </p> ");
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
    } else if (str === "Règles de publication") {
        res.status(201)
            .send("<H1>Règles de publication</H1>" +
                "<p> Pour la sécurité et le confort des utilisateurs de Dibida, notre équipe est particulièrement attentive à ce que toutes les annonces publiées soient conformes à nos règles. Pour éviter que votre annonce ne soit bloquée ou mise en veille pour être examinée, veuillez lire attentivement le règles suivantes avant de publier une annonce: </p> "+
                "<ul>" +
                "<li> Toutes les annonces doivent être placées en ligne avec une image sans filigrane (sauf pour les classes emplois et services) </li>" +
                "<li> Toutes les annonces doivent avoir les numéros de téléphone et l'adresse e-mail valide </li>" +
                "<li> Tous les produits et services doivent être réels, acquis légalement (non volés) et situés en Guinée </li>" +
                "<li> La description de l'annonce doit être claire et concise et la photo doit clairement illustrer le produit ou le service proposé </li>" +
                "<li> La description de l'annonce ne peut pas inclure de liens vers des sites Web tiers </li>" +
                "<li> Il n'est pas permis de mettre plusieurs produits ou services dans la même annonce: chaque article doit être publié séparément (à l'exception des sets, par exemple, vaisselle, etc.) </li>" +
                "<li> Les annonces postées en double sont interdites: vous ne pouvez pas publier une annonce avec le même contenu qu'une autre annonce déjà active sur le site </li>" +
                "<li> Les accords irréalistes doivent être bloqués sur la base des critères de Dibida </li>" +
                "<li> Tous les articles, produits et services considérés comme illégaux en Guinée sont interdits. Voir la liste des articles illégaux ci-dessous </li>" +
                "<li> Tout contenu abusif est interdit (images ou langage offensants) est interdit </li>" +
                "<li> Les annonces demandant des dons ou pour aider ne sont pas autorisées </li>" +
                "</ul>" +
                "<p> <b> Veuillez noter que les éléments suivants sont interdits sur dibida </b> </p>" +
                "<ul>" +
                "<li> Les armes: les fusils, les couteaux et les épées, les explosifs, les gaz lacrymogènes, les coups de poing américains, les matraques, etc. </li>" +
                "<li> Drogues, alcool, drogues, tabac et autres produits liés au tabagisme </li>" +
                "<li> Les feux d'artifice et les produits dérivés </li>" +
                "<li> Tous les produits pharmaceutiques ou médicaux sont disponibles uniquement sur ordonnance </li>" +
                "<li> Les espèces menacées d'extinction en vertu de toute loi locale ou internationale, et les plantes et animaux exotiques </li>" +
                "<li> Les pierres précieuses </li>" +
                "<li> Les organes humains </li>" +
                "<li> Articles contrefaits </li>" +
                "<li> Copies illégales / piratées dans des logiciels ou des éléments audiovisuels, y compris également les cartes mémoire ou autre périphérique de stockage, par exemple. DVD, CD et livres </li>" +
                "<li> Services psychiques, vaudous ou de magie noire et tarot, horoscopes </li>" +
                "<li> Les produits naturels qui prétendent guérir les maladies. </li>" +
                "<li> Les coupons, bons et cartes de crédit </li>" +
                "<li> Le contenu ou les services à caractère sexuel explicite </li>" +
                "<li> Pyramide des ventes et offre d'emplois pour \" travailler à domicile \ </li>" +
                "<li> L'argent des opérations - les annonces mettant en vedette l'échange de devises au cours légal </li>" +
                "<li> Les offres permettent de gagner de l'argent rapidement </li>" +
                "</ul>" +
                "<p> Tous les articles, produits et services considérés comme illégaux en Guinée sont interdits! </p>");
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
    } else if (str === "Conseils aux utilisateurs") {
        res.status(201)
            .send("<H1> Conseils aux utilisateurs </H1>" +
                "<H2> 1. Consignes de sécurité </H2>" +
                "<H3> Nos conseils pour acheter en toute sécurité sur Dibida </H3>" +
                "<ul>" +
                "<li> Prenez rendez-vous avec le vendeur dans un lieu public que vous connaissez </li>" +
                "<li> Ne payez rien avant pour vérifier la qualité du produit que vous achetez </li>" +
                "<li> Évitez de payer ou de transférer de l'argent pour avancer </li>" +
                "<li> Attention aux prix trop bas </li>" +
                "<li> Ne donnez pas d'informations personnelles (coordonnées bancaires, numéro de carte de crédit / débit) </li>" +
                "</ul>" +
                "<H3> Nos conseils pour vendre en toute sécurité sur Dibida </H3>" +
                "<ul>" +
                "<li> Demandez toujours un numéro de téléphone aux acheteurs que vous contactez par e-mail et vérifiez que le -ci est valide </li>" +
                "<li> Évitez d'être payé via des services non sécurisés pour transférer de l'argent. </li>" +
                "<li> Attention aux acheteurs situés à l'étranger, Dibida est un site d'achat et de vente 100% local </li>" +
                "<li> N'envoyez jamais votre article à un acheteur avant qu'il ne vous ait payé </li>" +
                "</ul>" +
                "<H2> 2. Conseils pour détecter un fraudeur </H2>" +
                "<p> Portez une attention particulière lorsque: </p>" +
                "<ul>" +
                "<li> Le nom du vendeur ou du magasin est à l'étranger </li>" +
                "<li> La description contient un compte Skype, un prix en devise étrangère ($ ou € par exemple) </li>" +
                "<li> Le prix est trop précis. Les fraudeurs ont tendance à convertir un prix en dollars en devise locale, ce qui donne les prix très détaillés. </li>" +
                "</ul>" +
                "<p> Si vous pensez qu'une annonce est frauduleuse, veuillez nous contacter. </p>" +
                "<H2> 3. Comment vendre rapidement </H2>" +
                "<ol type = 'a'>" +
                "<li> Choisissez le bon prix </li>" +
                "\n" +
                "Pour choisir le bon prix pour votre article, vous pouvez consulter des annonces similaires sur le site. Plus votre prix sera compétitif, plus vous vendez votre article rapidement. \n" +
                "\n" +
                "<li> Rédigez une description détaillée </li>" +
                "\n" +
                "Une description minutieuse de votre produit aidera l'utilisateur à bien comprendre ce que vous vendez. Préférez un titre court et précis. Si votre produit est endommagé, mentionnez-le. \n" +
                "\n" +
                "<li> Une annonce avec des photos obtient 10 vues supplémentaires! </li>" +
                "\n" +
                "Accompagnez votre description de produit d'une ou plusieurs photos de bonne qualité, de préférence sous différents angles et sous un bon éclairage. Vous vendez votre article dix fois plus rapidement! </li>" +
                "</ol>");
    } else {
        res.status(201).send("<H1>Not Valid link provided with end-point : /" + str + " </H1>");
    }
});

module.exports = router;
