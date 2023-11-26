beforeEach(function(){
    cy.log("---- Before both test suites ----");
});

describe('Test Suite1', ()=>{
    it.only("Test Suite1 - TC1", ()=>{
        
        cy.log("--- Test Suite ---TC1 ---");
    })

    it("Test Suite1 - TC2", ()=>{
        
        cy.log("--- Test Suite ---TC2 ---");
    })
})

describe('Test Suite2', ()=>{

    it("Test Suite2 - TC1", ()=>{
        
        cy.log("--- Test Suite ---TC1 ---");
    })

    it("Test Suite2 - TC2", ()=>{
        
        cy.log("--- Test Suite ---TC2 ---");
    })
})