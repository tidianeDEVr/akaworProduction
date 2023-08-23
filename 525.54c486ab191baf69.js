"use strict";(self.webpackChunkakawor_front=self.webpackChunkakawor_front||[]).push([[525],{7525:(gt,P,a)=>{a.r(P),a.d(P,{ProduitsModule:()=>ut});var l=a(6895),g=a(9299),t=a(4650),m=a(6298),h=a(8773),f=a(4859),M=a(266),A=a(3683),U=a(4850),s=a(4006),w=a(7684),q=a(8971);const I=function(o){return{active:o}};function k(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"li",30)(1,"a",31),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw();return t.KtG(d.changeCategory(c))}),t._UZ(2,"i"),t.TgZ(3,"span"),t._uU(4),t.qZA()()()}if(2&o){const n=r.$implicit,e=t.oxw();t.Q6J("ngClass",t.VKq(7,I,e.activeCategory===n)),t.xp6(1),t.s9C("routerLink","/produits/"+n.categorySlug),t.s9C("matTooltip",n.categoryLibelle),t.xp6(1),t.Tol(n.categoryIconClass),t.xp6(2),t.Oqu(n.categoryLibelle)}}function J(o,r){1&o&&(t.TgZ(0,"div",34),t._UZ(1,"app-product-card-loader"),t.qZA())}function N(o,r){if(1&o&&(t.TgZ(0,"div",32),t.YNc(1,J,2,0,"div",33),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.loaderCards)}}function S(o,r){1&o&&(t.TgZ(0,"div",35),t._UZ(1,"img",36),t.qZA())}function F(o,r){if(1&o&&(t.TgZ(0,"div")(1,"div",34),t._UZ(2,"app-product-card",37),t.qZA()()),2&o){const n=r.$implicit;t.xp6(2),t.Q6J("product",n)}}let v=(()=>{class o{constructor(n,e,i){this.produitsService=n,this.categoriesService=e,this.router=i,this.loaderCards=["","","","","","","","","","","","","","","",""],this.productCategories=[],this.priceRangeMin=0,this.priceRangeMax=0,this.selectedPriceRangeMax=0,this.selectedPriceRangeMin=0,this.isProductsLoaded=!1}ngOnInit(){const e=window.location.href.split("/")[4];e?this.produitsService.getProductsByCategoriesSlug(e).then(i=>{"category not found"===i.message&&this.router.navigate(["/produits"]),this.populateProducts(i)}):this.produitsService.getProducts().then(i=>{this.populateProducts(i)}),this.categoriesService.getCategoriesProducts().then(i=>{this.productCategories=i,e&&i.forEach(c=>{e===c.categorySlug&&(this.activeCategory=c)})})}populateProducts(n){this.products=n,this.isProductsLoaded=!this.isProductsLoaded,this.selectedPriceRangeMax=this.priceRangeMax}filterProducts(){document.querySelector("#top-filter")}changeCategory(n){this.activeCategory===n&&this.router.navigate(["/produits"]),this.isProductsLoaded=!1,n.categorySlug&&this.produitsService.getProductsByCategoriesSlug(n.categorySlug).then(e=>{this.activeCategory=n,this.products=e,this.isProductsLoaded=!0})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(m.o),t.Y36(h.G),t.Y36(g.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-all-produits"]],decls:40,vars:5,consts:[[1,"all-products-section"],[1,"container"],[1,"main"],[1,"row"],[1,"col","col-2","d-none","d-xl-block"],[1,"container","filter","h-100"],[2,"position","sticky","top","0","padding-bottom","30px"],[1,"text-ellip","pt-3","fw-bold"],[1,"title-divider",2,"margin-top","-12px"],["class","active",3,"ngClass",4,"ngFor","ngForOf"],[1,"col","col-12","col-xl-10"],[1,"container","all-products"],[1,"mb-3"],[1,"d-flex","align-items-center","justify-content-between","w-100"],[1,"display-types","d-flex","align-items-center"],["mat-icon-button","",1,"active"],[1,"fa-solid","fa-grip-vertical"],["mat-icon-button","",1,"disabled"],[1,"fa-solid","fa-list"],[1,"d-flex","align-items-center"],["id","top-filter",1,"form-select","form-select-sm",3,"change"],["value","0"],["selected","","value","1"],["value","2"],["value","3"],["value","4"],["class","row row-cols-2 row-cols-xl-4 g-3",4,"ngIf"],["matTooltip","Pas d'annonces en ligne !","class","empty-result d-flex flex-column align-items-center",4,"ngIf"],[1,"row","row-cols-2","row-cols-xl-4","g-3","pb-5",3,"hidden"],[4,"ngFor","ngForOf"],[1,"active",3,"ngClass"],[1,"text-ellip",3,"routerLink","matTooltip","click"],[1,"row","row-cols-2","row-cols-xl-4","g-3"],["class","col",4,"ngFor","ngForOf"],[1,"col"],["matTooltip","Pas d'annonces en ligne !",1,"empty-result","d-flex","flex-column","align-items-center"],["src","../../../../../assets/images/empty.svg","alt","pas de resultats",1,"mt-3","mb-5"],[3,"product"]],template:function(n,e){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"aside",5)(6,"div",6)(7,"h4",7),t._uU(8,"Cat\xe9gories"),t.qZA(),t._UZ(9,"div",8),t.TgZ(10,"ul"),t.YNc(11,k,5,9,"li",9),t.qZA()()()(),t.TgZ(12,"div",10)(13,"div",11)(14,"mat-toolbar",12)(15,"div",13)(16,"div",14)(17,"button",15),t._UZ(18,"i",16),t.qZA(),t.TgZ(19,"button",17),t._UZ(20,"i",18),t.qZA()(),t.TgZ(21,"div",19)(22,"p"),t._uU(23,"Trier par:"),t.qZA(),t.TgZ(24,"select",20),t.NdJ("change",function(){return e.filterProducts()}),t.TgZ(25,"option",21),t._uU(26,"S\xe9lectionnez"),t.qZA(),t.TgZ(27,"option",22),t._uU(28,"Nom de A \xe0 Z"),t.qZA(),t.TgZ(29,"option",23),t._uU(30,"Nom de Z \xe0 A"),t.qZA(),t.TgZ(31,"option",24),t._uU(32,"Prix croissant"),t.qZA(),t.TgZ(33,"option",25),t._uU(34,"Prix d\xe9croissant"),t.qZA()()()()(),t.YNc(35,N,2,1,"div",26),t.YNc(36,S,2,0,"div",27),t.TgZ(37,"div",28),t.YNc(38,F,3,1,"div",29),t.qZA()()()()(),t._UZ(39,"mat-divider"),t.qZA()()),2&n&&(t.xp6(11),t.Q6J("ngForOf",e.productCategories),t.xp6(24),t.Q6J("ngIf",!e.isProductsLoaded),t.xp6(1),t.Q6J("ngIf",!e.products||0===e.products.length),t.xp6(1),t.Q6J("hidden",!e.isProductsLoaded),t.xp6(1),t.Q6J("ngForOf",e.products))},dependencies:[l.mk,l.sg,l.O5,f.RK,M.gM,A.Ye,U.d,s.YN,s.Kr,w.C,q.Y,g.rH],styles:["[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]{background-color:var(--gray-400)}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Jost,sans-serif}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .empty-result[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{max-width:400px;width:90%}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]{background-color:var(--white);border-radius:5px;border:var(--gray-500) 1px solid}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .display-types[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background:var(--gray-400);scale:.8;display:flex;align-items:center;justify-content:center}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .display-types[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]{color:var(--green-400)}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .display-types[_ngcontent-%COMP%]   button.disabled[_ngcontent-%COMP%]{pointer-events:none;opacity:.5}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:13px;font-weight:400;color:var(--gray-600);margin-top:10px}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{margin-left:10px}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   mat-toolbar[_ngcontent-%COMP%]   .mat-slider__right-input[_ngcontent-%COMP%]{display:none!important}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .all-products[_ngcontent-%COMP%]{padding:20px 0}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{padding-bottom:30px;background-color:var(--gray-500)}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer;width:100%;background:var(--gray-400);border-radius:5px;padding:10px;margin-bottom:8px;transition:all .3s ease-in-out}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{width:100%;text-decoration:none;color:var(--gray-600)}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:10px}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover, [_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]{background-color:var(--green-400)}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%], [_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--white)}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .price-range[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin-bottom:-12px;font-size:12px;color:var(--gray-600)}[_nghost-%COMP%]   .all-products-section[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   .price-range[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:10px;color:var(--gray-600);font-style:italic}"]}),o})();var p=a(1261),E=a(9891),O=a(2319),y=a(3546),Z=a(9549),Q=a(4144),Y=a(7392),L=a(3238),D=a(4385),b=a(6018);function z(o,r){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Modification d'une annonce"),t.qZA())}function V(o,r){1&o&&(t.TgZ(0,"h1"),t._uU(1,"Cr\xe9ation d'une nouvelle annonce"),t.qZA())}function $(o,r){if(1&o&&(t.TgZ(0,"mat-option",57),t._uU(1),t.qZA()),2&o){const n=r.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n.categoryLibelle," ")}}function K(o,r){if(1&o&&(t.TgZ(0,"mat-option",57),t._uU(1),t.qZA()),2&o){const n=r.$implicit;t.Q6J("value",n),t.xp6(1),t.hij(" ",n.categoryLibelle," ")}}function R(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",58)(1,"button",59),t.NdJ("click",function(){const c=t.CHM(n).index,d=t.oxw();return t.KtG(d.removeAttribut(c))}),t._uU(2," Retirer "),t.qZA(),t.TgZ(3,"input",60),t.NdJ("ngModelChange",function(i){const d=t.CHM(n).$implicit;return t.KtG(d.key=i)}),t.qZA(),t.TgZ(4,"input",61),t.NdJ("ngModelChange",function(i){const d=t.CHM(n).$implicit;return t.KtG(d.value=i)}),t.qZA()()}if(2&o){const n=r.$implicit;t.xp6(3),t.Q6J("ngModel",n.key),t.xp6(1),t.Q6J("ngModel",n.value)}}function j(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",62)(1,"label",63),t._UZ(2,"img",64),t.qZA(),t.TgZ(3,"input",65),t.NdJ("change",function(i){const d=t.CHM(n).index,u=t.oxw();return t.KtG(u.displayAndUploadFile(i,d))}),t.qZA(),t.TgZ(4,"button",36)(5,"mat-icon"),t._uU(6,"close"),t.qZA()()()}if(2&o){const n=r.index;t.xp6(1),t.s9C("for","other"+n),t.xp6(1),t.s9C("id","displayOther"+n),t.xp6(1),t.s9C("id","other"+n)}}const _=function(o){return{"selected-visibility":o}},x=function(o){return{disabled:o}};let B=(()=>{class o{constructor(n,e,i,c,d){this.produitService=n,this.toastService=e,this.securityService=i,this.categoriesService=c,this.route=d,this.isOnDraftMode=!1,this.selectedVisibility=1,this.urlToSendImages=`${p.N.BACKEND_API_URL}/image/upload`,this.urlToGetImages=`${p.N.BACKEND_IMAGES_FOLDER}`,this.attributsProduct=[{key:"",value:""}],this.stepPercent=25,this.titleControl=new s.NI("",[s.kI.required,s.kI.minLength(5)]),this.priceControl=new s.NI("",[s.kI.required,s.kI.min(2)]),this.weightControl=new s.NI("",[s.kI.required,s.kI.min(.1)]),this.stockControl=new s.NI("",[s.kI.required,s.kI.min(1)]),this.descriptionControl=new s.NI("",[s.kI.required,s.kI.minLength(10)]),this.mainCategoryControl=new s.NI(null,[s.kI.required]),this.subCategoryControl=new s.NI(null),this.subCategories=[],this.mainProductsCategories=[],this.productObject={productTitle:"",productPrice:0,productDescription:"",productIsOutOfStock:!1},this.otherImages=["","","","","",""],this.categoriesService.getCategoriesProducts().then(u=>{this.mainProductsCategories=u}),this.mainCategoryControl.valueChanges.subscribe(u=>{this.categoriesService.getSubCategoriesProducts(u.id).then(T=>{T&&(this.subCategories=T)})}),this.securityService.getAuthenticatedUser().then(u=>{u.id&&(this.productOwnerId=u.id)})}ngOnInit(){this.route.queryParams.subscribe(n=>{n.edit_product&&this.produitService.getProductBySlug(n.edit_product).then(e=>{e.message||(this.productObject=e,this.isOnDraftMode=!0,this.hydrateFields(e),document.title="Modification d'une annonce | Akawor")})})}setVisibility(n){this.selectedVisibility=n}hydrateImages(n){var e=document.querySelector("#displayPrincipal");e&&(e.src=`${this.urlToGetImages}/${n}`)}hydrateFields(n){n.productTitle&&this.titleControl.setValue(n.productTitle),n.productStock&&this.stockControl.setValue(n.productStock),n.productWeight&&this.weightControl.setValue(n.productWeight),n.productMainImage&&this.hydrateImages(n.productMainImage),n.productPrice&&this.priceControl.setValue(n.productPrice),n.productDescription&&this.descriptionControl.setValue(n.productDescription),n.productFeatures&&(this.attributsProduct=JSON.parse(n.productFeatures)),n.CategoryId&&this.categoriesService.getCategoryById(n.CategoryId).then(e=>{null!=e.categoryParentId?(this.subCategoryControl.setValue(e),this.categoriesService.getCategoryById(e.categoryParentId).then(i=>{this.mainCategoryControl.setValue(i)})):this.mainCategoryControl.setValue(e)})}stepUp(){25===this.stepPercent&&!this.isOnDraftMode&&(this.updateProductObject(),this.saveProduct()),this.stepPercent<100&&(this.stepPercent+=25,this.changeProgressbarWidth())}stepDown(){this.stepPercent>25&&(this.stepPercent-=25,this.changeProgressbarWidth())}changeProgressbarWidth(){let n=document.querySelector(".progress-bar");n&&(n.style.width=`${this.stepPercent}%`)}displayAndUploadMainFile(n){let e=document.querySelector("#displayPrincipal");if(n.target.files){var i=new FileReader;i.readAsDataURL(n.target.files[0]),i.onload=c=>{e&&(e.src=c.target.result)},this.uploadFile(n.target.files[0],!0)}}displayAndUploadFile(n,e){let i=document.querySelector(`#displayOther${e}`);if(n.target.files){var c=new FileReader;c.readAsDataURL(n.target.files[0]),c.onload=d=>{i&&(i.src=d.target.result)},this.uploadFile(n.target.files[0],!1)}}uploadFile(n,e){const i=`${p.N.BACKEND_API_URL}/image/upload?product=${this.productObject.id}&mainImage=${e}`,c=new XMLHttpRequest,d=new FormData;c.open("POST",i,!0),c.onreadystatechange=()=>{4===c.readyState&&200===c.status&&"uploaded successfully"===JSON.parse(c.responseText).message&&this.toastService.show({body:"Image enregistr\xe9e !",isSuccess:!0})},d.append("folder","products"),d.append("images",n),c.send(d)}updateProductObject(){this.titleControl.value&&(this.productObject.productTitle=this.titleControl.value),this.weightControl.value&&(this.productObject.productWeight=parseInt(this.weightControl.value)),this.stockControl.value&&(this.productObject.productStock=parseInt(this.stockControl.value)),this.descriptionControl.value&&(this.productObject.productDescription=this.descriptionControl.value),this.priceControl.value&&(this.productObject.productPrice=parseInt(this.priceControl.value)),this.mainCategoryControl.value&&(this.productObject.productCategory=this.mainCategoryControl.value),this.subCategoryControl.value&&(this.productObject.productCategory=this.subCategoryControl.value),this.attributsProduct.length>0&&""!==this.attributsProduct[0].key&&""!==this.attributsProduct[0].value&&(this.productObject.productFeatures=JSON.stringify(this.attributsProduct))}saveProduct(){this.produitService.createProduct(this.productObject,this.productOwnerId).then(n=>{this.toastService.show({body:"L'annonce est enregistr\xe9 dans vos brouillons.",isSuccess:!0}),n&&(this.productObject=n)}).catch(n=>{this.toastService.show({body:"Une erreur s'est produite lors de la cr\xe9ation du produit ! Veuillez r\xe9essayer plus tard."})})}addNewAttribut(){this.attributsProduct.push({key:"",value:""})}removeAttribut(n){this.attributsProduct.splice(n,1)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(m.o),t.Y36(E.k),t.Y36(O.I),t.Y36(h.G),t.Y36(g.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-create-product"]],decls:166,vars:36,consts:[[1,"manage-section"],[1,"container"],[1,"row"],[1,"col","col-3","d-none","d-xl-block"],["activePath","publish-announce"],[1,"col","col-xl-9"],[1,"create-product"],[4,"ngIf"],["role","progressbar","aria-label","Basic example","aria-valuenow","50","aria-valuemin","0","aria-valuemax","100",1,"progress"],[1,"progress-bar","progress-bar-striped","progress-bar-animated",2,"width","25%"],[1,"row","g-4","mt-3"],[1,"col","col-xl-6",3,"hidden"],[1,"col","details-part"],[1,"h-100"],[1,"fa-solid","fa-1","step-number"],[1,"mt-3"],["appearance","outline",1,"w-100"],["matInput","",3,"formControl"],["matInput","","type","number",3,"formControl"],[1,"row","row-cols-2"],[1,"col"],[1,"fa-solid","fa-2","step-number"],[3,"formControl"],[3,"value",4,"ngFor","ngForOf"],["appearance","outline",1,"w-100",3,"hidden"],[1,"fa-solid","fa-3","step-number"],[1,"d-flex","justify-content-between","align-items-center","mb-3"],[1,"btn","btn-outline-dark","btn-sm",3,"click"],["class","input-group attr-group",4,"ngFor","ngForOf"],[1,"col","col-xl-6","col-12",3,"hidden"],[1,"images-part"],["id","input-files","enctype","multipart/form-data","method","post",1,"input-files"],[1,"principal","position-relative"],["for","principal"],["alt","image principale du produit","id","displayPrincipal","src","../../../../../assets/images/products/product-placeholder.png","crossorigin","anonymous",1,"img-thumbnail","w-100"],["type","file","name","images","id","principal","accept","image/*","name","images",1,"d-none",3,"change"],["mat-mini-fab","","matTooltip","Supprimer",1,"position-absolute","rm-img-btn"],[1,"others","row","row-cols-3","g-2","mt-1"],["class","other col position-relative",4,"ngFor","ngForOf"],[1,"fa-solid","fa-4","step-number"],[1,"images-advices"],[1,"list-group","list-group-flush"],[1,"list-group-item"],[1,"fa-solid","fa-image"],[1,"fa-solid","fa-camera"],[1,"fa-solid","fa-images"],[1,"fa-solid","fa-sd-card"],[1,"fa-solid","fa-file-image"],[1,"fa-solid","fa-cube"],[1,"fa-solid","fa-5","step-number"],[1,"row","mt-2"],[1,"visibility-card",3,"ngClass","click"],[1,"fa-lg","fa-solid","fa-circle-check","position-absolute"],[1,"mt-3","d-flex","justify-content-start","align-items-center"],[1,"btn","step-down-btn",2,"margin-right","10px",3,"ngClass","click"],[1,"btn","btn-dark",3,"hidden","ngClass","click"],[1,"btn","btn-dark",3,"hidden","click"],[3,"value"],[1,"input-group","attr-group"],[1,"remove-btn","position-absolute","btn","btn-sm","btn-outline-danger",3,"click"],["placeholder","Ex : Couleur","type","text","maxlength","20",1,"form-control",2,"border-top-left-radius","5px","border-bottom-left-radius","5px",3,"ngModel","ngModelChange"],["placeholder","Rouge","type","text","maxlength","20",1,"form-control",3,"ngModel","ngModelChange"],[1,"other","col","position-relative"],[3,"for"],["alt","image principale du produit","src","../../../../../assets/images/products/product-placeholder.png","crossorigin","anonymous",1,"img-thumbnail","w-100",3,"id"],["type","file","name","images","accept","image/*",1,"d-none",3,"id","change"]],template:function(n,e){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"app-manage-aside",4),t.qZA(),t.TgZ(5,"div",5)(6,"main",6)(7,"div",1),t.YNc(8,z,2,0,"h1",7),t.YNc(9,V,2,0,"h1",7),t.TgZ(10,"div",8),t._UZ(11,"div",9),t.qZA(),t.TgZ(12,"div",10)(13,"div",11)(14,"mat-card")(15,"mat-card-content")(16,"div",12)(17,"div",13)(18,"h2"),t._UZ(19,"i",14),t.TgZ(20,"span"),t._uU(21,"D\xe9tails du produit"),t.qZA()(),t.TgZ(22,"p"),t._uU(23,"Remplissez toutes les informations n\xe9cessaires."),t.qZA(),t.TgZ(24,"div",15)(25,"mat-form-field",16)(26,"mat-label"),t._uU(27,"Titre du produit"),t.qZA(),t._UZ(28,"input",17),t.qZA(),t.TgZ(29,"mat-form-field",16)(30,"mat-label"),t._uU(31,"Prix (\u20ac)"),t.qZA(),t._UZ(32,"input",18),t.qZA(),t.TgZ(33,"div",19)(34,"div",20)(35,"mat-form-field",16)(36,"mat-label"),t._uU(37,"Poids (KG)"),t.qZA(),t._UZ(38,"input",18),t.qZA()(),t.TgZ(39,"div",20)(40,"mat-form-field",16)(41,"mat-label"),t._uU(42,"N\xb0 en stock"),t.qZA(),t._UZ(43,"input",18),t.qZA()()(),t.TgZ(44,"mat-form-field",16)(45,"mat-label"),t._uU(46,"Description du produit"),t.qZA(),t._UZ(47,"textarea",17),t.qZA()()()()()()(),t.TgZ(48,"div",11)(49,"mat-card")(50,"mat-card-content")(51,"h2"),t._UZ(52,"i",21),t.TgZ(53,"span"),t._uU(54,"Choisissez une cat\xe9gorie"),t.qZA()(),t.TgZ(55,"p"),t._uU(56,"Choisissez une cat\xe9gorie \xe0 ce produit."),t.qZA(),t.TgZ(57,"div",15)(58,"mat-form-field",16)(59,"mat-label"),t._uU(60,"Cat\xe9gorie principale"),t.qZA(),t.TgZ(61,"mat-select",22),t.YNc(62,$,2,2,"mat-option",23),t.qZA()(),t.TgZ(63,"mat-form-field",24)(64,"mat-label"),t._uU(65,"Sous-cat\xe9gorie"),t.qZA(),t.TgZ(66,"mat-select",22),t.YNc(67,K,2,2,"mat-option",23),t.qZA()()()()(),t.TgZ(68,"mat-card",15)(69,"mat-card-content")(70,"h2"),t._UZ(71,"i",25),t.TgZ(72,"span"),t._uU(73,"Attributs du produit"),t.qZA()(),t.TgZ(74,"div",26)(75,"p"),t._uU(76,"Ajoutez des d\xe9tails \xe0 ce produit. (optionnel)"),t.qZA(),t.TgZ(77,"button",27),t.NdJ("click",function(){return e.addNewAttribut()}),t._uU(78," Ajouter "),t.qZA()(),t.YNc(79,R,5,2,"div",28),t.qZA()()(),t.TgZ(80,"div",29)(81,"mat-card")(82,"mat-card-content")(83,"div",30)(84,"div",13)(85,"h2"),t._UZ(86,"i",25),t.TgZ(87,"span"),t._uU(88,"T\xe9l\xe9verser des images de votre annonces"),t.qZA()(),t.TgZ(89,"p"),t._uU(90," Une annonce avec des images de qualit\xe9 obtient plus de visibilit\xe9, augmente vos chances de vendre plus rapidement."),t._UZ(91,"br"),t.qZA(),t.TgZ(92,"form",31)(93,"div",32)(94,"label",33),t._UZ(95,"img",34),t.qZA(),t.TgZ(96,"input",35),t.NdJ("change",function(c){return e.displayAndUploadMainFile(c)}),t.qZA(),t.TgZ(97,"button",36)(98,"mat-icon"),t._uU(99,"close"),t.qZA()()(),t.TgZ(100,"div",37),t.YNc(101,j,7,3,"div",38),t.qZA()()()()()()(),t.TgZ(102,"div",29)(103,"mat-card")(104,"mat-card-content")(105,"div",13)(106,"h2"),t._UZ(107,"i",39),t.TgZ(108,"span"),t._uU(109,"Quelques astuces"),t.qZA()(),t.TgZ(110,"div",40)(111,"ul",41)(112,"li",42),t._UZ(113,"i",43),t.TgZ(114,"span"),t._uU(115," La premi\xe8re image import\xe9e sera l'image principale du produit."),t.qZA()(),t.TgZ(116,"li",42),t._UZ(117,"i",44),t.TgZ(118,"span"),t._uU(119," Privil\xe9giez les images sous fond blanc."),t.qZA()(),t.TgZ(120,"li",42),t._UZ(121,"i",45),t.TgZ(122,"span"),t._uU(123," Les types de fichiers pris en charge sont .jpeg, .jpg, .png"),t.qZA()(),t.TgZ(124,"li",42),t._UZ(125,"i",46),t.TgZ(126,"span"),t._uU(127,"La taille max d'une image autoris\xe9e est 10MB. (Max 10 images)"),t.qZA()(),t.TgZ(128,"li",42),t._UZ(129,"i",47),t.TgZ(130,"span"),t._uU(131," Les produits avec photos se vendent plus rapidement."),t.qZA()(),t.TgZ(132,"li",42),t._UZ(133,"i",48),t.TgZ(134,"span"),t._uU(135," Choisissez des photos avec plusieurs angles."),t.qZA()()()()()()()(),t.TgZ(136,"div",11)(137,"mat-card")(138,"mat-card-content")(139,"h2"),t._UZ(140,"i",49),t.TgZ(141,"span"),t._uU(142,"Options de visibilit\xe9"),t.qZA()(),t.TgZ(143,"div",50)(144,"div",20)(145,"mat-card",51),t.NdJ("click",function(){return e.setVisibility(1)}),t.TgZ(146,"mat-card-content"),t._uU(147," Par d\xe9faut "),t._UZ(148,"i",52),t.qZA()()(),t.TgZ(149,"div",20)(150,"mat-card",51),t.NdJ("click",function(){return e.setVisibility(2)}),t.TgZ(151,"mat-card-content"),t._uU(152," Offre 1 "),t._UZ(153,"i",52),t.qZA()()(),t.TgZ(154,"div",20)(155,"mat-card",51),t.NdJ("click",function(){return e.setVisibility(3)}),t.TgZ(156,"mat-card-content"),t._uU(157," Offre 2 "),t._UZ(158,"i",52),t.qZA()()()()()()()(),t.TgZ(159,"div",53)(160,"button",54),t.NdJ("click",function(){return e.stepDown()}),t._uU(161," Pr\xe9c\xe9dent "),t.qZA(),t.TgZ(162,"button",55),t.NdJ("click",function(){return e.stepUp()}),t._uU(163," Suivant "),t.qZA(),t.TgZ(164,"button",56),t.NdJ("click",function(){return e.saveProduct()}),t._uU(165," Publier l'annonce "),t.qZA()()()()()()()()),2&n&&(t.xp6(8),t.Q6J("ngIf",e.isOnDraftMode),t.xp6(1),t.Q6J("ngIf",!e.isOnDraftMode),t.xp6(4),t.Q6J("hidden",25!==e.stepPercent),t.xp6(15),t.Q6J("formControl",e.titleControl),t.xp6(4),t.Q6J("formControl",e.priceControl),t.xp6(6),t.Q6J("formControl",e.weightControl),t.xp6(5),t.Q6J("formControl",e.stockControl),t.xp6(4),t.Q6J("formControl",e.descriptionControl),t.xp6(1),t.Q6J("hidden",25!==e.stepPercent),t.xp6(13),t.Q6J("formControl",e.mainCategoryControl),t.xp6(1),t.Q6J("ngForOf",e.mainProductsCategories),t.xp6(1),t.Q6J("hidden",0===e.subCategories.length),t.xp6(3),t.Q6J("formControl",e.subCategoryControl),t.xp6(1),t.Q6J("ngForOf",e.subCategories),t.xp6(12),t.Q6J("ngForOf",e.attributsProduct),t.xp6(1),t.Q6J("hidden",50!==e.stepPercent),t.xp6(21),t.Q6J("ngForOf",e.otherImages),t.xp6(1),t.Q6J("hidden",50!==e.stepPercent),t.xp6(34),t.Q6J("hidden",75!==e.stepPercent),t.xp6(9),t.Q6J("ngClass",t.VKq(26,_,1===e.selectedVisibility)),t.xp6(5),t.Q6J("ngClass",t.VKq(28,_,2===e.selectedVisibility)),t.xp6(5),t.Q6J("ngClass",t.VKq(30,_,3===e.selectedVisibility)),t.xp6(5),t.Q6J("ngClass",t.VKq(32,x,25===e.stepPercent)),t.xp6(2),t.Q6J("hidden",100===e.stepPercent)("ngClass",t.VKq(34,x,e.titleControl.invalid||e.priceControl.invalid||e.weightControl.invalid||e.stockControl.invalid||e.descriptionControl.invalid||e.mainCategoryControl.invalid)),t.xp6(2),t.Q6J("hidden",100!==e.stepPercent))},dependencies:[l.mk,l.sg,l.O5,y.a8,y.dn,f.nh,M.gM,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.nD,s.oH,s.On,s.F,Z.KE,Z.hX,Q.Nt,Y.Hw,L.ey,D.gD,b.f],styles:["[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]{padding:20px 0;background-color:var(--gray-400)}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .visibility-card[_ngcontent-%COMP%]{cursor:pointer;min-height:100px;transition:all ease-in-out .3s}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .visibility-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]{position:relative}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .visibility-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .position-absolute[_ngcontent-%COMP%]{display:none;top:15px;right:15px}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   mat-card.selected-visibility[_ngcontent-%COMP%]{box-shadow:#32325d40 0 13px 27px -5px,#0000004d 0 8px 16px -8px}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   mat-card.selected-visibility[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .position-absolute[_ngcontent-%COMP%]{display:block;color:var(--green-400)}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .main-row[_ngcontent-%COMP%]{min-height:300px}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attr-group[_ngcontent-%COMP%]{position:relative;margin-bottom:15px}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attr-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{height:54px}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attr-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{box-shadow:none;border:1.5px solid var(--black)}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attr-group[_ngcontent-%COMP%]   .remove-btn[_ngcontent-%COMP%]{right:4px;top:4px;scale:.9;border-radius:5px!important}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-start}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;background:var(--green-400);color:var(--white);border-radius:50%;width:30px;aspect-ratio:1;margin-right:10px}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%]{color:var(--red);margin-right:7px}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .step-down-btn[_ngcontent-%COMP%]{background-color:var(--red);color:var(--white)}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .disabled[_ngcontent-%COMP%]{opacity:.75;pointer-events:none}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .input-files[_ngcontent-%COMP%]{margin:0 auto}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .input-files[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{cursor:pointer;aspect-ratio:1;object-fit:cover}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .input-files[_ngcontent-%COMP%]   .rm-img-btn[_ngcontent-%COMP%]{top:8px;right:10px;scale:.8;background-color:var(--green-400)}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:Jost,sans-serif;font-size:26px;font-weight:600}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{background-color:var(--green-400)}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:18px;font-weight:500;margin:0}[_nghost-%COMP%]   .create-product[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--gray-600);font-size:14px}"]}),o})();var C=a(8255);function G(o,r){if(1&o&&(t.TgZ(0,"span",12),t._uU(1),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.hij("",n.myProducts.length," annonce(s) trouv\xe9e(s)")}}function H(o,r){1&o&&(t.TgZ(0,"div",13)(1,"div",14)(2,"div",15)(3,"div",16),t._UZ(4,"img",17),t.TgZ(5,"span",18),t._uU(6,"Pas d'annonces ! "),t.TgZ(7,"a",19),t._uU(8,"Cliquez-ici"),t.qZA(),t._uU(9," pour cr\xe9e une annonce"),t.qZA()()()()())}function W(o,r){1&o&&(t.TgZ(0,"span",38),t._uU(1,"En ligne"),t.qZA())}function X(o,r){1&o&&(t.TgZ(0,"span",39),t._uU(1,"Brouillon"),t.qZA())}function tt(o,r){1&o&&(t.TgZ(0,"span",40),t._uU(1,"En attente de validation"),t.qZA())}function nt(o,r){1&o&&(t.TgZ(0,"span",41),t._uU(1,"Annonce r\xe9voqu\xe9e"),t.qZA())}function et(o,r){if(1&o&&t._UZ(0,"img",42),2&o){const n=t.oxw().$implicit,e=t.oxw(2);t.s9C("src",e.imageBaseUrl+n.productMainImage,t.LSH)}}function ot(o,r){1&o&&t._UZ(0,"img",43)}function it(o,r){if(1&o){const n=t.EpF();t.TgZ(0,"div",22)(1,"div",13)(2,"div",23)(3,"div",24),t.YNc(4,W,2,0,"span",25),t.YNc(5,X,2,0,"span",26),t.YNc(6,tt,2,0,"span",27),t.YNc(7,nt,2,0,"span",28),t.qZA(),t.YNc(8,et,1,1,"img",29),t.YNc(9,ot,1,0,"img",30),t.TgZ(10,"div",31)(11,"p",32),t._uU(12),t.qZA(),t.TgZ(13,"div",33)(14,"button",34),t._UZ(15,"i",35),t.qZA(),t.TgZ(16,"mat-menu",null,36)(18,"button",37),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.displayProduct(c))}),t._uU(19,"Aper\xe7u de l'annonce"),t.qZA(),t.TgZ(20,"button",37),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.editProduct(c))}),t._uU(21,"Modifier l'annonce"),t.qZA(),t.TgZ(22,"button",37),t.NdJ("click",function(){const c=t.CHM(n).$implicit,d=t.oxw(2);return t.KtG(d.deleteProduct(c))}),t._uU(23,"Supprimer l'annonce"),t.qZA()()()()()()()}if(2&o){const n=r.$implicit,e=t.MAs(17),i=t.oxw(2);t.xp6(2),t.Jzz("background-image: url(",i.imageThumbnailUrl+n.productMainImage,");"),t.xp6(2),t.Q6J("ngIf","ONLINE"===n.productState),t.xp6(1),t.Q6J("ngIf","DRAFT"===n.productState),t.xp6(1),t.Q6J("ngIf","AWAITING"===n.productState),t.xp6(1),t.Q6J("ngIf","REVOKED"===n.productState),t.xp6(1),t.Q6J("ngIf",n.productMainImage),t.xp6(1),t.Q6J("ngIf",!n.productMainImage),t.xp6(3),t.Oqu(n.productTitle),t.xp6(2),t.Q6J("matMenuTriggerFor",e)}}function rt(o,r){if(1&o&&(t.TgZ(0,"div",20),t.YNc(1,it,24,11,"div",21),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",n.myProducts)}}const at=[{path:"",component:v,title:"Nos annonces | Akawor"},{path:"nouvelle-annonce",component:B,title:"Ajout d'un nouveau produit | Akawor"},{path:"mes-annonces",component:(()=>{class o{constructor(n,e,i){this.produitsService=n,this.securityService=e,this.router=i,this.imageBaseUrl=`${p.N.BACKEND_IMAGES_FOLDER}/products/`,this.imageThumbnailUrl=`${p.N.BACKEND_IMAGES_FOLDER}/thumbnails/thumb`,this.securityService.getAuthenticatedUser().then(c=>{this.seller=c,this.seller.id&&this.produitsService.getSellerProducts(this.seller.id).then(d=>{this.myProducts=d})})}editProduct(n){this.router.navigateByUrl(`/produits/nouvelle-annonce?edit_product=${n.productSlug}`)}displayProduct(n){this.router.navigate([`/produit/${n.productSlug}`])}deleteProduct(n){alert(n.productTitle)}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(m.o),t.Y36(O.I),t.Y36(g.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-my-products"]],decls:14,vars:3,consts:[[1,"manage-section"],[1,"container"],[1,"row"],[1,"col","col-3","d-none","d-xl-block"],["activePath","manage-announces"],[1,"col","col-xl-9"],[1,"h-100","p-3"],[1,"d-flex","align-items-center","justify-content-between"],["class","count-label",4,"ngIf"],[1,"title-divider"],["class","card",4,"ngIf"],["class","my-products row row-cols-xl-4 g-xl-4 row-cols-2 g-3",4,"ngIf"],[1,"count-label"],[1,"card"],[1,"card-content"],[1,"container","pt-5"],[1,"d-flex","flex-column","align-items-center","justify-content-center"],["src","../../../../../assets/images/empty.svg","alt","Pas encore de produits","loading","lazy",1,"empty-img"],[1,"mt-5","alert","alert-danger"],["routerLink","/produits/nouvelle-annonce"],[1,"my-products","row","row-cols-xl-4","g-xl-4","row-cols-2","g-3"],["class","col single-prod",4,"ngFor","ngForOf"],[1,"col","single-prod"],[1,"position-relative","card-body"],[1,"position-absolute"],["class","badge text-bg-success m-1",4,"ngIf"],["class","badge text-bg-info m-1",4,"ngIf"],["class","badge text-bg-warning m-1",4,"ngIf"],["class","badge text-bg-danger m-1",4,"ngIf"],["alt","produit","loading","lazy","crossorigin","anonymous",3,"src",4,"ngIf"],["src","../../../../../../assets/images/products/product-placeholder.png","alt","produit","loading","lazy","crossorigin","anonymous",4,"ngIf"],[1,"infos"],[1,"text-ellip","label-prod"],[1,"menu"],["type","button",1,"menu-btn",3,"matMenuTriggerFor"],[1,"fa-solid","fa-bars"],["actions","matMenu"],["mat-menu-item","",3,"click"],[1,"badge","text-bg-success","m-1"],[1,"badge","text-bg-info","m-1"],[1,"badge","text-bg-warning","m-1"],[1,"badge","text-bg-danger","m-1"],["alt","produit","loading","lazy","crossorigin","anonymous",3,"src"],["src","../../../../../../assets/images/products/product-placeholder.png","alt","produit","loading","lazy","crossorigin","anonymous"]],template:function(n,e){1&n&&(t.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"app-manage-aside",4),t.qZA(),t.TgZ(5,"div",5)(6,"main",6)(7,"div",7)(8,"h1"),t._uU(9,"Mes annonces"),t.qZA(),t.YNc(10,G,2,1,"span",8),t.qZA(),t._UZ(11,"div",9),t.YNc(12,H,10,0,"div",10),t.YNc(13,rt,2,1,"div",11),t.qZA()()()()()),2&n&&(t.xp6(10),t.Q6J("ngIf",e.myProducts),t.xp6(2),t.Q6J("ngIf",!e.myProducts||0===e.myProducts.length),t.xp6(1),t.Q6J("ngIf",e.myProducts&&e.myProducts.length>0))},dependencies:[l.sg,l.O5,C.VK,C.OP,C.p6,b.f,g.rH],styles:["[_nghost-%COMP%]   .count-label[_ngcontent-%COMP%]{color:var(--gray-600)}[_nghost-%COMP%]   .empty-img[_ngcontent-%COMP%]{max-width:300px;width:80%}[_nghost-%COMP%]   .my-products[_ngcontent-%COMP%]   .single-prod[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{background-position:center;background-repeat:no-repeat;background-size:cover;min-height:200px;padding:0;position:relative!important}[_nghost-%COMP%]   .my-products[_ngcontent-%COMP%]   .single-prod[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]{position:absolute!important;bottom:0;left:0;height:40px;background:var(--white);opacity:.94;width:100%;display:flex;align-items:center;justify-content:space-between;padding:0 8px}[_nghost-%COMP%]   .my-products[_ngcontent-%COMP%]   .single-prod[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   .label-prod[_ngcontent-%COMP%]{margin-top:8px;font-size:16px}[_nghost-%COMP%]   .my-products[_ngcontent-%COMP%]   .single-prod[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]{right:5px}[_nghost-%COMP%]   .my-products[_ngcontent-%COMP%]   .single-prod[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{background-color:var(--green-400)!important;width:30px;aspect-ratio:1;color:var(--white);display:flex;align-items:center;justify-content:center;border:none;border-radius:4px;transition:scale ease-in-out .3s}[_nghost-%COMP%]   .my-products[_ngcontent-%COMP%]   .single-prod[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{scale:1.1}[_nghost-%COMP%]   .my-products[_ngcontent-%COMP%]   .single-prod[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .my-products[_ngcontent-%COMP%]   .single-prod[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;aspect-ratio:1;object-fit:cover;border-radius:4px}"]}),o})(),title:"Mes annonces | Akawor",canActivate:[a(6186).CP]},{path:":slug",component:v}];let dt=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(at),g.Bz]}),o})();var lt=a(272);let ut=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[m.o],imports:[l.ez,lt.I,dt]}),o})()}}]);