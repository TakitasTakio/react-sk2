let _singleton = Symbol();
export default class ModuleService {
 constructor(singletonToken) {
   if (_singleton !== singletonToken)
     throw new Error('Singleton!!!');
 }
 static get instance() {
   if(!this[_singleton])
     this[_singleton] = new ModuleService(_singleton);
   return this[_singleton]
 }
 
 createModule(courseId, module) {
     const MODULE_API_URL_1 = 'http://localhost:8080/api/course/CID/module';

   return fetch(MODULE_API_URL_1.replace('CID', courseId),
   {   body: JSON.stringify(module),
       headers: { 'Content-Type': 'application/json' },
       method: 'POST'
   }).then(function (response)
           { return response.json(); })
}

findAllModulesForCourse(courseId) {
    const MODULE_API_URL_2 = 'http://localhost:8080/api/course/CID/module';
   return fetch(MODULE_API_URL_2
          .replace('CID', courseId),
          {body: JSON.stringify(module),
           headers: { 'Content-Type': 'application/json' },
           method: 'POST'})
         .then(function (response) {
         return response.json();})
 }




deleteModule(moduleId) {
    const MODULE_API_URL_3 ='http://localhost:8080/api/module/MODULE_ID';
   return fetch(MODULE_API_URL_3.replace
      ('MODULE_ID', moduleId), {
       method: 'delete'
   })
}



}


