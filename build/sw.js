importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"8c190772f5b3ff7c9f89b997fc4cb02e","url":"analysis/analysis-quiz.html"},{"revision":"769e0e44363ca733658b8eb0ebdedcf2","url":"analysis/analysis-quiz.json"},{"revision":"e43696b09bede4067b6799861e7c932a","url":"analysis/comparison-with-other-algorithms.html"},{"revision":"4a8e757aa27e22f25da9cdb270732f0b","url":"analysis/images/comparison.png"},{"revision":"b350079cf91176b65bc740e4a31dcdac","url":"analysis/images/selection_stable.png"},{"revision":"2cd6c080cd8e54a3db40b39524123ccc","url":"analysis/images/stable.png"},{"revision":"4cd2f8c8d2f400dea2d7b70f8db7236a","url":"analysis/index.html"},{"revision":"d9cbbfc42e7eb2e7bffc21458432645d","url":"analysis/overview.html"},{"revision":"d6f97537d65eeb101371ea5a9180ccdf","url":"analysis/selection_time.html"},{"revision":"ffb435b35186203f7c4cd00d5f7921e8","url":"analysis/simulation/css/selection_css.css"},{"revision":"0828969e5ff7166a0d638e21a3c79dda","url":"analysis/simulation/js/realization.js"},{"revision":"70570972599d8ba493c4d9590f4cfa76","url":"analysis/simulation/js/selection_demo.js"},{"revision":"004fd7d80755866ec360d4031a33e522","url":"analysis/simulation/js/selection_ex.js"},{"revision":"1b4b6c1e214a4d150f35b79dcaf4c4ec","url":"analysis/simulation/js/selection_practice.js"},{"revision":"0c2481bed788c8b79eefddf877e4ca61","url":"analysis/simulation/js/selection_time.js"},{"revision":"8d352be8fd05084b025053278ad6de7c","url":"analysis/simulation/selection_time.html"},{"revision":"d2f731b851b9c3d8bcf9746cd0ab83eb","url":"analysis/time-and-space-complexity.html"},{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"21fb702c2a728198c76d8f53516bab9a","url":"code-assessment.html"},{"revision":"16fc592adee8965ffe1d3a152167e485","url":"code-assessment.json"},{"revision":"769e0e44363ca733658b8eb0ebdedcf2","url":"experiment/analysis/analysis-quiz.json"},{"revision":"4a8e757aa27e22f25da9cdb270732f0b","url":"experiment/analysis/images/comparison.png"},{"revision":"b350079cf91176b65bc740e4a31dcdac","url":"experiment/analysis/images/selection_stable.png"},{"revision":"2cd6c080cd8e54a3db40b39524123ccc","url":"experiment/analysis/images/stable.png"},{"revision":"ffb435b35186203f7c4cd00d5f7921e8","url":"experiment/analysis/simulation/css/selection_css.css"},{"revision":"0828969e5ff7166a0d638e21a3c79dda","url":"experiment/analysis/simulation/js/realization.js"},{"revision":"70570972599d8ba493c4d9590f4cfa76","url":"experiment/analysis/simulation/js/selection_demo.js"},{"revision":"004fd7d80755866ec360d4031a33e522","url":"experiment/analysis/simulation/js/selection_ex.js"},{"revision":"1b4b6c1e214a4d150f35b79dcaf4c4ec","url":"experiment/analysis/simulation/js/selection_practice.js"},{"revision":"0c2481bed788c8b79eefddf877e4ca61","url":"experiment/analysis/simulation/js/selection_time.js"},{"revision":"4d080a0e92bad7c9c8999141c1b7a287","url":"experiment/analysis/simulation/selection_time.html"},{"revision":"16fc592adee8965ffe1d3a152167e485","url":"experiment/code-assessment.json"},{"revision":"fef9aad8cedab9cc69ac44cc72eb1a8e","url":"experiment/images/sort.png"},{"revision":"1fe9f74f5a678c875f461b18e9913e1a","url":"experiment/posttest.json"},{"revision":"8650dd4785a54be7514c055a8f226ec0","url":"experiment/pretest.json"},{"revision":"18e2d585ae2d9037f4e7a370c2746062","url":"experiment/selection-sort/images/selection_algorithm.png"},{"revision":"0709065125a87d3bb9746c2c645db98b","url":"experiment/selection-sort/images/selection_concept.png"},{"revision":"af14e669cabf259aeae7a0e4fec6be9f","url":"experiment/selection-sort/selection-sort-quiz.json"},{"revision":"9b69a9916d90fc57d06cdb4407889c2a","url":"experiment/selection-sort/simulation/css/selection_css.css"},{"revision":"0828969e5ff7166a0d638e21a3c79dda","url":"experiment/selection-sort/simulation/js/realization.js"},{"revision":"70570972599d8ba493c4d9590f4cfa76","url":"experiment/selection-sort/simulation/js/selection_demo.js"},{"revision":"004fd7d80755866ec360d4031a33e522","url":"experiment/selection-sort/simulation/js/selection_ex.js"},{"revision":"1b4b6c1e214a4d150f35b79dcaf4c4ec","url":"experiment/selection-sort/simulation/js/selection_practice.js"},{"revision":"0c2481bed788c8b79eefddf877e4ca61","url":"experiment/selection-sort/simulation/js/selection_time.js"},{"revision":"e0d66ea56227cdc618e730e1bb0ff609","url":"experiment/selection-sort/simulation/selection_demo.html"},{"revision":"3bc527cb896963af7ccc82de98e9f136","url":"experiment/selection-sort/simulation/selection_ex.html"},{"revision":"e3d760490c888e67d56859b53df74ec3","url":"experiment/selection-sort/simulation/selection_practice.html"},{"revision":"cfeb098f27a768f9dfa41db7807c033e","url":"feedback.html"},{"revision":"8eedcd5c4ec896ac9fa789b9ae67ccb2","url":"further-reading-and-references.html"},{"revision":"fef9aad8cedab9cc69ac44cc72eb1a8e","url":"images/sort.png"},{"revision":"53356cf433cf8cab690f97d18d7c113a","url":"index.html"},{"revision":"b7257659a87675a9f5e747f2ff57ac23","url":"overview.html"},{"revision":"52b2b188b839c72c47a7955a4ba83655","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"ee558a7ef62d0a398e4b02489d5466ce","url":"posttest.html"},{"revision":"1fe9f74f5a678c875f461b18e9913e1a","url":"posttest.json"},{"revision":"f3197866cba687936f01e1287d0f9299","url":"pretest.html"},{"revision":"8650dd4785a54be7514c055a8f226ec0","url":"pretest.json"},{"revision":"220e205b130a5cb96d74d64c722d99fc","url":"recap.html"},{"revision":"18e2d585ae2d9037f4e7a370c2746062","url":"selection-sort/images/selection_algorithm.png"},{"revision":"0709065125a87d3bb9746c2c645db98b","url":"selection-sort/images/selection_concept.png"},{"revision":"66733747c1740c63a010b343c641d2be","url":"selection-sort/index.html"},{"revision":"1e4e0c68881741c1677ccb0b7ffe8f05","url":"selection-sort/overview.html"},{"revision":"4a1b63d4e46f146e9dac807da73343dd","url":"selection-sort/selection_demo.html"},{"revision":"992edf8c66e21bb57e3b949a757bf27f","url":"selection-sort/selection_ex.html"},{"revision":"a164bf54ddd5d90cd83bfc84d5b7e8f3","url":"selection-sort/selection_practice.html"},{"revision":"d09c85904777e8662879d3f76cc614dd","url":"selection-sort/selection-sort-algorithm.html"},{"revision":"a91b685694eb0bbd9bd721c9dbae4848","url":"selection-sort/selection-sort-quiz.html"},{"revision":"af14e669cabf259aeae7a0e4fec6be9f","url":"selection-sort/selection-sort-quiz.json"},{"revision":"9b69a9916d90fc57d06cdb4407889c2a","url":"selection-sort/simulation/css/selection_css.css"},{"revision":"0828969e5ff7166a0d638e21a3c79dda","url":"selection-sort/simulation/js/realization.js"},{"revision":"70570972599d8ba493c4d9590f4cfa76","url":"selection-sort/simulation/js/selection_demo.js"},{"revision":"004fd7d80755866ec360d4031a33e522","url":"selection-sort/simulation/js/selection_ex.js"},{"revision":"1b4b6c1e214a4d150f35b79dcaf4c4ec","url":"selection-sort/simulation/js/selection_practice.js"},{"revision":"0c2481bed788c8b79eefddf877e4ca61","url":"selection-sort/simulation/js/selection_time.js"},{"revision":"4e887ae8c16d0d45da28fd79ccb34384","url":"selection-sort/simulation/selection_demo.html"},{"revision":"43ed077b99dbbfbfba42d64b0c05ff78","url":"selection-sort/simulation/selection_ex.html"},{"revision":"f43e60f9110f6e10780853c27949d5cb","url":"selection-sort/simulation/selection_practice.html"},{"revision":"919bcfb7c9d167235079bea20c1da738","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );