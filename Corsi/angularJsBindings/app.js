angular.module("appPrincipale", [])


.component("ilMioPrimoComponente", {
    bindings:{
        stringbinding:"@",
        objectbiding:"<"
    },
    controller:[function() {
        var $ctrl = this;
        $ctrl.$onInit = function() {
            $ctrl.variabile1 = $ctrl.stringbinding || "NA";
            $ctrl.variabile2 = $ctrl.objectbiding || "NA";
        };

        $ctrl.functionBinding = function(name) {
            $ctrl.variabile1 = name;
        };
    }],
    template:  `
    <h2>Ciao dal Primo componente!</h2>
    <p>string binding is: "{{$ctrl.variabile1}}"
    <p>object binding is: "{{$ctrl.variabile2}}"
    <componente-interno function-binding="$ctrl.functionBinding(name)"><componente-interno/>
    `
})

.component("componenteInterno", {
    bindings:{
        functionBinding:"&"
    },
    controller: [function() {

        var $ctrl = this;

        $ctrl.functionBinding = function() {
            $ctrl.functionBinding({name: $ctrl.newName});
            $ctrl.newName = "";
        };
    }],
    template:  `
    <h3>Ciao dal componente interno</h3>
    <p> New Name: <input ng-model="$ctrl.newName"> </p>
    <p> <button ng-click="$ctrl.functionBinding()"> Add Name</button></p>
    `
});

//ControllerPerIlMioPrimoComponente