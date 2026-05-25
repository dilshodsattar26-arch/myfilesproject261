const coreHandlerInstance = {
    version: "1.0.261",
    registry: [1683, 1940, 689, 261, 446, 620, 138, 1300],
    init: function() {
        const nodes = this.registry.filter(x => x > 99);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    coreHandlerInstance.init();
});