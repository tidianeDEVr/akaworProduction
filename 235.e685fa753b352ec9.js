"use strict";(self.webpackChunkakawor_front=self.webpackChunkakawor_front||[]).push([[235],{6018:(O,C,s)=>{s.d(C,{f:()=>b});var e=s(4650),f=s(2319),t=s(6895),v=s(9299);const u=function(n){return{active:n}};function Z(n,p){if(1&n&&(e.TgZ(0,"li")(1,"a",10),e._UZ(2,"i",11),e.TgZ(3,"span",3),e._uU(4,"G\xe9rer mon panier"),e.qZA()()()),2&n){const l=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(1,u,"manage-panier"===l.activePath))}}function P(n,p){if(1&n&&(e.TgZ(0,"li")(1,"a",12),e._UZ(2,"i",13),e.TgZ(3,"span",3),e._uU(4,"G\xe9rer ma liste de souhaits"),e.qZA()()()),2&n){const l=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(1,u,"manage-list-de-souhaits"===l.activePath))}}function U(n,p){1&n&&(e.TgZ(0,"label",0),e._uU(1,"Mes annonces"),e.qZA())}function h(n,p){if(1&n&&(e.TgZ(0,"ul")(1,"li")(2,"a",14),e._UZ(3,"i",15),e.TgZ(4,"span",3),e._uU(5,"Publier une annonce"),e.qZA()()()()),2&n){const l=e.oxw();e.xp6(2),e.Q6J("ngClass",e.VKq(1,u,"publish-announce"===l.activePath))}}function _(n,p){if(1&n&&(e.TgZ(0,"li")(1,"a",16),e._UZ(2,"i",17),e.TgZ(3,"span",3),e._uU(4,"Mes adresses"),e.qZA()()()),2&n){const l=e.oxw();e.xp6(1),e.Q6J("ngClass",e.VKq(1,u,"manage-deliveries-address"===l.activePath))}}function M(n,p){1&n&&(e.TgZ(0,"label",0),e._uU(1,"Ma boutique"),e.qZA())}function d(n,p){if(1&n&&(e.TgZ(0,"ul")(1,"li")(2,"a",18),e._UZ(3,"i",19),e.TgZ(4,"span",3),e._uU(5,"G\xe9rer ma boutique"),e.qZA()()()()),2&n){const l=e.oxw();e.xp6(2),e.Q6J("ngClass",e.VKq(1,u,"manage-shop"===l.activePath))}}let b=(()=>{class n{constructor(l){this.securityService=l,this.securityService.getAuthenticatedUser().then(a=>{this.role=a.userRole,this.user=a})}logout(){this.securityService.logout()}}return n.\u0275fac=function(l){return new(l||n)(e.Y36(f.I))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-manage-aside"]],inputs:{activePath:"activePath"},decls:32,vars:16,consts:[[1,"form-label"],["routerLink","/parametres/compte-et-profile",1,"w-100","text-start",3,"ngClass"],[1,"fa-solid","fa-user"],[1,"text-ellip"],[4,"ngIf"],["routerLink","/commandes",1,"w-100","text-start",3,"ngClass"],[1,"fa-solid","fa-box"],["class","form-label",4,"ngIf"],["routerLink","/livraisons",1,"w-100","text-ellip","text-start",3,"ngClass"],[1,"fa-solid","fa-truck"],["routerLink","/mon-panier",1,"w-100","text-ellip","text-start",3,"ngClass"],[1,"fa-solid","fa-cart-shopping"],["routerLink","/ma-liste-de-souhaits",1,"w-100","text-ellip","text-start",3,"ngClass"],[1,"fa-solid","fa-heart"],["routerLink","/produits/nouvelle-annonce",1,"w-100","text-ellip","text-start",3,"ngClass"],[1,"fa-solid","fa-bullhorn"],["routerLink","/livraisons/mes-adresses",1,"w-100","text-ellip","text-start",3,"ngClass"],[1,"fa-solid","fa-map-location-dot"],["routerLink","/parametres/ma-boutique",1,"w-100","text-ellip","text-start",3,"ngClass"],[1,"fa-solid","fa-gears"]],template:function(l,a){1&l&&(e.TgZ(0,"aside")(1,"label",0),e._uU(2,"Mon compte"),e.qZA(),e.TgZ(3,"ul")(4,"li")(5,"a",1),e._UZ(6,"i",2),e.TgZ(7,"span",3),e._uU(8,"Compte & profile"),e.qZA()()(),e.YNc(9,Z,5,3,"li",4),e.YNc(10,P,5,3,"li",4),e.qZA(),e.TgZ(11,"label",0),e._uU(12,"Mes commandes"),e.qZA(),e.TgZ(13,"ul")(14,"li")(15,"a",5),e._UZ(16,"i",6),e.TgZ(17,"span",3),e._uU(18,"G\xe9rer mes commandes"),e.qZA()()()(),e.YNc(19,U,2,0,"label",7),e.YNc(20,h,6,3,"ul",4),e.TgZ(21,"label",0),e._uU(22,"Mes livraisons"),e.qZA(),e.TgZ(23,"ul")(24,"li")(25,"a",8),e._UZ(26,"i",9),e.TgZ(27,"span",3),e._uU(28,"G\xe9rer mes livraisons"),e.qZA()()(),e.YNc(29,_,5,3,"li",4),e.qZA(),e.YNc(30,M,2,0,"label",7),e.YNc(31,d,6,3,"ul",4),e.qZA()),2&l&&(e.xp6(5),e.Q6J("ngClass",e.VKq(10,u,"profile"===a.activePath)),e.xp6(4),e.Q6J("ngIf",a.role&&"ROLE_CLIENT"===a.role),e.xp6(1),e.Q6J("ngIf",a.role&&"ROLE_CLIENT"===a.role),e.xp6(5),e.Q6J("ngClass",e.VKq(12,u,"manage-commands"===a.activePath)),e.xp6(4),e.Q6J("ngIf",a.role&&"ROLE_VENDEUR"===a.role),e.xp6(1),e.Q6J("ngIf",a.role&&"ROLE_VENDEUR"===a.role),e.xp6(5),e.Q6J("ngClass",e.VKq(14,u,"manage-deliveries"===a.activePath)),e.xp6(4),e.Q6J("ngIf",a.role&&"ROLE_CLIENT"===a.role),e.xp6(1),e.Q6J("ngIf",a.role&&"ROLE_VENDEUR"===a.role),e.xp6(1),e.Q6J("ngIf",a.role&&"ROLE_VENDEUR"===a.role))},dependencies:[t.mk,t.O5,v.rH],styles:["[_nghost-%COMP%]   aside[_ngcontent-%COMP%]{border-right:1px solid var(--gray-500);padding-right:25px}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   .form-label[_ngcontent-%COMP%]{color:var(--gray-600)}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin-bottom:30px!important}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;border-radius:4px;text-decoration:none;color:var(--black);border:none;padding:15px;margin-bottom:15px;background:var(--gray-500);font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:flex-start;transition:all ease-in-out .15s}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%], [_nghost-%COMP%]   aside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--green-400);color:var(--white)}[_nghost-%COMP%]   aside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:var(--green-300)}"]}),n})()},235:(O,C,s)=>{s.d(C,{i:()=>y});var e=s(4006),f=s(1261),t=s(4650),v=s(4756),u=s(9891),Z=s(2319),P=s(8773),U=s(1481),h=s(6895),_=s(3546),M=s(266),d=s(9549),b=s(4144),n=s(7392),p=s(3238),l=s(4385),a=s(6018);function E(r,c){if(1&r){const i=t.EpF();t.TgZ(0,"div",55)(1,"button",56),t.NdJ("click",function(){t.CHM(i);const g=t.oxw();return t.KtG(g.removeLogo())}),t._UZ(2,"i",48),t.qZA()()}}function L(r,c){if(1&r&&(t.TgZ(0,"mat-option",57),t._uU(1),t.qZA()),2&r){const i=c.$implicit;t.Q6J("value",i.categoryLibelle),t.xp6(1),t.hij(" ",i.categoryLibelle," ")}}function x(r,c){1&r&&(t.TgZ(0,"div",58)(1,"span",59),t._uU(2,"Loading..."),t.qZA()())}function k(r,c){if(1&r&&t._UZ(0,"iframe",62),2&r){const i=t.oxw(2);t.Q6J("src",i.url,t.uOi)}}function I(r,c){if(1&r&&(t.TgZ(0,"div",60),t.YNc(1,k,1,1,"iframe",61),t.qZA()),2&r){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.url)}}function q(r,c){1&r&&(t.TgZ(0,"div",63)(1,"span",59),t._uU(2,"Loading..."),t.qZA()())}const T=function(r){return{disabled:r}};let y=(()=>{class r{constructor(i,o,g,m,A){this.boutiquesServices=i,this.toastService=o,this.securityService=g,this.categoriesService=m,this.sanitizer=A,this.urlRegex=/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,this.shop={},this.isUpdating=!1,this.excludedNames=["ma boutique"],this.imageBaseUrl=`${f.N.BACKEND_IMAGES_FOLDER}/shops/`,this.categoryControl=new e.NI("",[e.kI.required,e.kI.minLength(4),e.kI.maxLength(600)]),this.descriptionControl=new e.NI("",[e.kI.required,e.kI.minLength(4),e.kI.maxLength(600)]),this.corpNameControl=new e.NI("",[e.kI.required,e.kI.minLength(4)]),this.shopEmailControl=new e.NI("",[e.kI.required]),this.phoneControl=new e.NI("",[e.kI.required]),this.addressControl=new e.NI("",[e.kI.required]),this.workingHoursControl=new e.NI("",[e.kI.required]),this.facebookControl=new e.NI("",[e.kI.pattern(this.urlRegex)]),this.instagramControl=new e.NI("",[e.kI.pattern(this.urlRegex)]),this.tiktokControl=new e.NI("",[e.kI.pattern(this.urlRegex)]),this.websiteControl=new e.NI("",[e.kI.pattern(this.urlRegex)]),this.corpNameUrl="",this.userPosition={long:"0",lat:"0"},this.isGettingPosition=!1}ngOnInit(){this.securityService.getAuthenticatedUser().then(i=>{this.user=i,"ROLE_VENDEUR"===i.userRole&&i.userEmail&&this.boutiquesServices.getShopBySeller(i.userEmail).then(o=>{this.shop=o,this.shop.shopLogoImage&&this.displayLogo(`${this.imageBaseUrl}/${this.shop.shopLogoImage}`),document.title=`Ma boutique - ${this.shop.shopLibelle}`,o.Category&&o.Category.categoryLibelle&&(this.category=o.Category,this.categoryControl.setValue(o.Category.categoryLibelle)),o.Social&&(this.social=o.Social,this.social.facebookLink&&this.facebookControl.setValue(this.social.facebookLink),this.social.instagramLink&&this.instagramControl.setValue(this.social.instagramLink),this.social.tiktokLink&&this.tiktokControl.setValue(this.social.tiktokLink),this.social.websiteLink&&this.websiteControl.setValue(this.social.websiteLink),this.social.shopEmailAddress&&this.shopEmailControl.setValue(this.social.shopEmailAddress),this.social.shopPhoneNumber&&this.phoneControl.setValue(this.social.shopPhoneNumber)),this.shop.shopLibelle&&this.corpNameControl.setValue(this.shop.shopLibelle),this.shop.shopAddress&&this.addressControl.setValue(this.shop.shopAddress),this.shop.shopDescription&&this.descriptionControl.setValue(this.shop.shopDescription),this.shop.shopWorkingHours&&this.workingHoursControl.setValue(this.shop.shopWorkingHours),this.shop.shopLatitude&&this.shop.shopLongitude&&(this.userPosition.lat=this.shop.shopLatitude,this.userPosition.long=this.shop.shopLongitude,this.url=this.getIframeUrl())}).catch(o=>{})}),this.categoriesService.getCategoriesShops().then(i=>{this.shopCatgories=i}).catch(i=>{this.toastService.show({body:"Une erreur s'est produite lors de la r\xe9cup\xe9ration des cat\xe9gories ! Veuillez r\xe9essayer."})}),this.corpNameControl.valueChanges.subscribe(i=>{i?(i=i.replaceAll(" ","-").normalize("NFD").replace(/[\u0300-\u036f]/g,""),this.corpNameUrl=i):this.corpNameUrl=""})}saveShopChanges(){if(this.isUpdating=!0,this.corpNameControl.value){if(this.excludedNames.includes(this.corpNameControl.value.toLowerCase()))return this.isUpdating=!1,this.toastService.show({body:"Veuillez revoir le nom de votre boutique !"});this.shop.shopLibelle=this.corpNameControl.value,this.shop.shopSlug=this.corpNameControl.value.replaceAll(" ","-").normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase()}this.addressControl.value&&(this.shop.shopAddress=this.addressControl.value),this.descriptionControl.value&&(this.shop.shopDescription=this.descriptionControl.value),"0"!==this.userPosition.lat&&(this.shop.shopLatitude=this.userPosition.lat.toString()),"0"!==this.userPosition.long&&(this.shop.shopLongitude=this.userPosition.long.toString()),this.workingHoursControl.value&&(this.shop.shopWorkingHours=this.workingHoursControl.value),this.facebookControl.value&&(this.social.facebookLink=this.facebookControl.value),this.instagramControl.value&&(this.social.instagramLink=this.instagramControl.value),this.tiktokControl.value&&(this.social.tiktokLink=this.tiktokControl.value),this.websiteControl.value&&(this.social.websiteLink=this.websiteControl.value),this.phoneControl.value&&(this.social.shopPhoneNumber=this.phoneControl.value),this.shopEmailControl.value&&(this.social.shopEmailAddress=this.shopEmailControl.value),this.boutiquesServices.updateShop(this.shop,this.social,this.categoryControl.value?this.categoryControl.value:"").then(i=>{this.isUpdating=!1,this.toastService.show(i?{body:"Vos modifications ont \xe9t\xe9 enregistr\xe9s !",isSuccess:!0}:{body:"Une erreur s'est produite. R\xe9essayez plus tard !",isSuccess:!1})}).catch(i=>{this.isUpdating=!1,this.toastService.show({body:"Une erreur s'est produite. R\xe9essayez plus tard !",isSuccess:!1})})}removeLogo(){}getIframeUrl(){return this.sanitizer.bypassSecurityTrustResourceUrl(`//maps.google.com/maps?q=${this.userPosition.lat},${this.userPosition.long}&z=15&output=embed`)}removeUserPosition(){this.shop.shopLatitude="",this.shop.shopLongitude="",this.userPosition={lat:"0",long:"0"}}getUserPosition(){this.isGettingPosition=!0,"geolocation"in navigator?navigator.geolocation.getCurrentPosition(i=>{const g=i.coords.longitude;this.userPosition.lat=i.coords.latitude.toString(),this.userPosition.long=g.toString(),this.url=this.getIframeUrl(),this.toastService.clear(),this.toastService.show({body:"Hooray \u{1f389} Votre position a \xe9t\xe9 r\xe9cup\xe9r\xe9e.",isSuccess:!0}),this.isGettingPosition=!1},i=>{this.toastService.show({body:"Impossible de retrouver votre position ! Veuillez autoriser la demande."}),this.isGettingPosition=!1}):(this.toastService.show({body:"Impossible de retrouver votre position ! Votre navigateur ne dispose pas de cette fonctionnalit\xe9."}),this.isGettingPosition=!1)}generatePositionUrl(){return`https://maps.google.com/maps?q=' + ${this.userPosition.lat} + ',' + ${this.userPosition.long} + '&t=&z=15&ie=UTF8&iwloc=&output=embed`}displayAndUploadLogoFile(i){if(i.target.files){var o=new FileReader;o.readAsDataURL(i.target.files[0]),o.onload=g=>{this.displayLogo(g.target.result)},this.uploadFile(i.target.files[0])}}displayLogo(i){let o=document.querySelector("#displayLogo");o&&(o.src=i)}uploadFile(i){const o=`${f.N.BACKEND_API_URL}/image/upload?shop=${this.shop.id}`,g=new XMLHttpRequest,m=new FormData;g.open("POST",o,!0),g.onreadystatechange=()=>{4===g.readyState&&200===g.status&&"uploaded successfully"===JSON.parse(g.responseText).message&&this.toastService.show({body:"Image enregistr\xe9e !",isSuccess:!0})},m.append("folder","shops"),m.append("images",i),g.send(m)}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(v.O),t.Y36(u.k),t.Y36(Z.I),t.Y36(P.G),t.Y36(U.H7))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-manage-shop"]],decls:164,vars:31,consts:[[1,"manage-section"],[1,"container"],[1,"row"],[1,"col","col-3","d-none","d-xl-block"],["activePath","manage-shop"],[1,"col","col-xl-9"],[1,"h-100","p-3"],[1,"row","mt-xl-3","g-3"],[1,"col","col-12"],[1,"row","g-3"],[1,"col","col-xl-5"],[1,"h-100"],[1,"fa-solid","fa-1","step-number"],[1,"mb-4"],["id","input-file","enctype","multipart/form-data",1,"mx-auto","mt-4","position-relative",2,"max-width","220px"],["for","logo-input"],["alt","shop","crossorigin","anonymous","src","assets/images/shops/logo-placeholder.jpeg","id","displayLogo",1,"img-thumbnail","display-logo"],["type","file","accept","img/*","id","logo-input","name","images",1,"d-none",3,"change"],["class","d-flex justify-content-center",4,"ngIf"],[1,"advise","text-end","mt-4"],[1,"col","col-xl-7"],[1,"fa-solid","fa-2","step-number"],["appearance","outline",1,"w-100","mb-3"],["matInput","",3,"formControl"],["align","end"],["name","category",3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"w-100"],["matInput","","rows","4",3,"formControl"],[1,"col","col-xl-6"],[1,"fa-solid","fa-3","step-number"],[1,"form-label"],["matInput","","type","email",3,"formControl"],["matSuffix",""],["matInput","","placeholder","https://mon-entreprise.com",3,"formControl"],[1,"fa-solid","fa-4","step-number"],["matInput","","placeholder","Placeholder",3,"formControl"],["matSuffix","",1,"fa-brands","fa-instagram","fa-lg",2,"margin-right","10px"],["matSuffix","",1,"fa-brands","fa-facebook-f","fa-lg",2,"margin-right","15px"],["matSuffix","",1,"fa-brands","fa-tiktok","fa-lg",2,"margin-right","10px"],[1,"text-end","advise","m-0","p-0"],[1,"mt-3"],[1,"fa-solid","fa-5","step-number"],[1,"d-xl-flex","align-items-center"],[1,"mx-xl-3","mb-3"],[1,"btn","get-location-btn",3,"ngClass","hidden","click"],[1,"fa-solid","fa-map-location"],[1,"btn","btn-danger","rm-location-btn",3,"hidden","click"],[1,"fa-solid","fa-trash"],["class","spinner-grow text-success","role","status","style","margin-top: -15px",4,"ngIf"],["class","mb-3",4,"ngIf"],["appearance","outline",1,"w-100","mt-3","mt-xl-0"],[1,"d-flex","align-items-center","mt-3"],[1,"btn","btn-dark",3,"ngClass","click"],["class","spinner-grow text-success mx-3","role","status",4,"ngIf"],[1,"d-flex","justify-content-center"],["matTooltip","Supprimer le logo",1,"btn","btn-sm","btn-outline-danger","rm-btn",3,"click"],[3,"value"],["role","status",1,"spinner-grow","text-success",2,"margin-top","-15px"],[1,"visually-hidden"],[1,"mb-3"],["height","100%","style","border: 0; width: 100%","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",3,"src",4,"ngIf"],["height","100%","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0","width","100%",3,"src"],["role","status",1,"spinner-grow","text-success","mx-3"]],template:function(i,o){1&i&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"app-manage-aside",4),t.qZA(),t.TgZ(5,"div",5)(6,"main",6)(7,"h1"),t._uU(8,"G\xe9rer ma boutique"),t.qZA(),t.TgZ(9,"div",7)(10,"div",8)(11,"div",9)(12,"div",10)(13,"mat-card",11)(14,"mat-card-content")(15,"mat-card-title"),t._UZ(16,"i",12),t.TgZ(17,"span"),t._uU(18,"Logo de votre entreprise"),t.qZA()(),t.TgZ(19,"div",13)(20,"form",14)(21,"label",15),t._UZ(22,"img",16),t.qZA(),t.TgZ(23,"input",17),t.NdJ("change",function(m){return o.displayAndUploadLogoFile(m)}),t.qZA(),t.YNc(24,E,3,0,"div",18),t.qZA(),t.TgZ(25,"p",19),t._uU(26," - Taille d'image conseill\xe9e: 200x200px."),t._UZ(27,"br"),t._uU(28," - Taille maximale: 5mb. "),t.qZA()()()()(),t.TgZ(29,"div",20)(30,"mat-card",11)(31,"mat-card-content")(32,"mat-card-title"),t._UZ(33,"i",21),t.TgZ(34,"span"),t._uU(35,"D\xe9tails de l'entreprise"),t.qZA()(),t.TgZ(36,"mat-form-field",22)(37,"mat-label"),t._uU(38,"Nom de l'entreprise"),t.qZA(),t._UZ(39,"input",23),t.TgZ(40,"mat-hint",24),t._uU(41),t.ALo(42,"lowercase"),t.qZA()(),t.TgZ(43,"mat-form-field",22)(44,"mat-label"),t._uU(45,"Cat\xe9gorie de l'entreprise"),t.qZA(),t.TgZ(46,"mat-select",25),t.YNc(47,L,2,2,"mat-option",26),t.qZA(),t.TgZ(48,"mat-hint",24),t._uU(49,"Cat\xe9gorie"),t.qZA()(),t.TgZ(50,"mat-form-field",27)(51,"mat-label"),t._uU(52,"Description de la boutique"),t.qZA(),t._UZ(53,"textarea",28),t.TgZ(54,"mat-hint",24),t._uU(55,"Vous \xeates libre de le modifier !"),t.qZA()()()()()()(),t.TgZ(56,"div",29)(57,"mat-card",11)(58,"mat-card-content")(59,"mat-card-title"),t._UZ(60,"i",30),t.TgZ(61,"span"),t._uU(62,"Contacts"),t.qZA()(),t.TgZ(63,"h3",31),t._uU(64," Vos clients pourrons vous contacter. "),t.qZA(),t.TgZ(65,"div",13)(66,"mat-form-field",22)(67,"mat-label"),t._uU(68,"Adresse e-mail"),t.qZA(),t._UZ(69,"input",32),t.TgZ(70,"mat-icon",33),t._uU(71,"alternate_email"),t.qZA(),t.TgZ(72,"mat-hint",24),t._uU(73,"E-mail"),t.qZA()(),t.TgZ(74,"mat-form-field",22)(75,"mat-label"),t._uU(76,"Num\xe9ro de t\xe9l\xe9phone"),t.qZA(),t._UZ(77,"input",23),t.TgZ(78,"mat-icon",33),t._uU(79,"phone"),t.qZA(),t.TgZ(80,"mat-hint",24),t._uU(81,"T\xe9l\xe9phone"),t.qZA()(),t.TgZ(82,"mat-form-field",22)(83,"mat-label"),t._uU(84,"Site internet de l'entreprise"),t.qZA(),t._UZ(85,"input",34),t.TgZ(86,"mat-icon",33),t._uU(87,"language"),t.qZA(),t.TgZ(88,"mat-hint",24),t._uU(89),t.qZA()(),t.TgZ(90,"mat-form-field",22)(91,"mat-label"),t._uU(92,"Horaires d'ouvertures"),t.qZA(),t._UZ(93,"input",23),t.TgZ(94,"mat-icon",33),t._uU(95,"calendar_month"),t.qZA(),t.TgZ(96,"mat-hint",24),t._uU(97,"Horaires"),t.qZA()()()()()(),t.TgZ(98,"div",29)(99,"mat-card",11)(100,"mat-card-content")(101,"mat-card-title"),t._UZ(102,"i",35),t.TgZ(103,"span"),t._uU(104,"R\xe9seaux sociaux"),t.qZA()(),t.TgZ(105,"h3",31),t._uU(106," Mettez les liens qui r\xe9dirigent vers vos r\xe9seaux sociaux. "),t.qZA(),t.TgZ(107,"div",13)(108,"mat-form-field",22)(109,"mat-label"),t._uU(110,"Lien vers votre compte Instagram"),t.qZA(),t._UZ(111,"input",36)(112,"i",37),t.TgZ(113,"mat-hint",24),t._uU(114),t.qZA()(),t.TgZ(115,"mat-form-field",22)(116,"mat-label"),t._uU(117,"Lien vers votre compte Facebook"),t.qZA(),t._UZ(118,"input",36)(119,"i",38),t.TgZ(120,"mat-hint",24),t._uU(121),t.qZA()(),t.TgZ(122,"mat-form-field",27)(123,"mat-label"),t._uU(124,"Lien vers votre compte Tiktok"),t.qZA(),t._UZ(125,"input",36)(126,"i",39),t.TgZ(127,"mat-hint",24),t._uU(128),t.qZA()()(),t.TgZ(129,"p",40),t._uU(130," - Laissez les champs vides pour les d\xe9sactiver. "),t.qZA()()()(),t.TgZ(131,"div",8)(132,"mat-card",41)(133,"mat-card-content")(134,"mat-card-title"),t._UZ(135,"i",42),t.TgZ(136,"span"),t._uU(137,"D\xe9tails de l'adresse"),t.qZA()(),t.TgZ(138,"div",43)(139,"h3",31),t._uU(140," Dites-nous ou se trouve votre entreprise. "),t.qZA(),t.TgZ(141,"div",44)(142,"button",45),t.NdJ("click",function(){return o.getUserPosition()}),t._UZ(143,"i",46),t.TgZ(144,"span"),t._uU(145,"J'utilise ma position"),t.qZA()(),t.TgZ(146,"button",47),t.NdJ("click",function(){return o.removeUserPosition()}),t._UZ(147,"i",48),t.TgZ(148,"span"),t._uU(149,"Supprimer position"),t.qZA()()(),t.YNc(150,x,3,0,"div",49),t.qZA(),t.YNc(151,I,2,1,"div",50),t.TgZ(152,"mat-form-field",51)(153,"mat-label"),t._uU(154,"Adresse de l'entreprise"),t.qZA(),t._UZ(155,"input",23),t.TgZ(156,"mat-icon",33),t._uU(157,"location_on"),t.qZA(),t.TgZ(158,"mat-hint",24),t._uU(159,"Adresse"),t.qZA()()()(),t.TgZ(160,"div",52)(161,"button",53),t.NdJ("click",function(){return o.saveShopChanges()}),t._uU(162," Enregister les modifications "),t.qZA(),t.YNc(163,q,3,0,"div",54),t.qZA()()()()()()()()),2&i&&(t.xp6(24),t.Q6J("ngIf",o.shop.shopLogoImage),t.xp6(15),t.Q6J("formControl",o.corpNameControl),t.xp6(2),t.hij("URL: https://akawor.com/boutiques/",t.lcZ(42,25,o.corpNameUrl),""),t.xp6(5),t.Q6J("formControl",o.categoryControl),t.xp6(1),t.Q6J("ngForOf",o.shopCatgories),t.xp6(6),t.Q6J("formControl",o.descriptionControl),t.xp6(16),t.Q6J("formControl",o.shopEmailControl),t.xp6(8),t.Q6J("formControl",o.phoneControl),t.xp6(8),t.Q6J("formControl",o.websiteControl),t.xp6(4),t.Oqu(o.websiteControl.valid?"Lien valide":"Lien invalide"),t.xp6(4),t.Q6J("formControl",o.workingHoursControl),t.xp6(18),t.Q6J("formControl",o.instagramControl),t.xp6(3),t.Oqu(o.instagramControl.valid?"Lien valide":"Lien invalide"),t.xp6(4),t.Q6J("formControl",o.facebookControl),t.xp6(3),t.Oqu(o.facebookControl.valid?"Lien valide":"Lien invalide"),t.xp6(4),t.Q6J("formControl",o.tiktokControl),t.xp6(3),t.Oqu(o.tiktokControl.valid?"Lien valide":"Lien invalide"),t.xp6(14),t.Q6J("ngClass",t.VKq(27,T,o.isGettingPosition))("hidden","0"!==o.userPosition.lat&&"0"!==o.userPosition.long),t.xp6(4),t.Q6J("hidden","0"==o.userPosition.lat&&"0"==o.userPosition.long),t.xp6(4),t.Q6J("ngIf",o.isGettingPosition),t.xp6(1),t.Q6J("ngIf","0"!==o.userPosition.lat&&"0"!==o.userPosition.long),t.xp6(4),t.Q6J("formControl",o.addressControl),t.xp6(6),t.Q6J("ngClass",t.VKq(29,T,o.isUpdating||o.corpNameControl.invalid||o.descriptionControl.invalid||o.shopEmailControl.invalid||o.phoneControl.invalid||o.websiteControl.invalid||o.instagramControl.invalid||o.facebookControl.invalid||o.tiktokControl.invalid||o.addressControl.invalid)),t.xp6(2),t.Q6J("ngIf",o.isUpdating))},dependencies:[h.mk,h.sg,h.O5,_.a8,_.dn,_.n5,M.gM,e._Y,e.Fj,e.JJ,e.JL,e.oH,e.F,d.KE,d.hX,d.bx,d.R9,b.Nt,n.Hw,p.ey,l.gD,a.f,h.i8],styles:["[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:10px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--red);margin-right:7px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .display-logo[_ngcontent-%COMP%]{cursor:pointer;width:200px;aspect-ratio:1;object-fit:contain;margin-bottom:20px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .rm-btn[_ngcontent-%COMP%]{position:absolute;top:10px;right:20px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .advise[_ngcontent-%COMP%]{color:var(--gray-600);font-size:12.5px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{border-radius:7px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .get-location-btn[_ngcontent-%COMP%]{background-color:var(--green-400);color:var(--white)}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .get-location-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .get-location-btn.disabled[_ngcontent-%COMP%]{background-color:var(--gray-600);pointer-events:none}[_nghost-%COMP%]   mat-card[_ngcontent-%COMP%]   .rm-location-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-right:10px}"]}),r})()}}]);