/// <reference types='cypress' />

import ToDo from "../pageobjects/todoPage"

describe('To-Do List Test', () => {

    beforeEach(() => {
        
        //Load the website
        ToDo.load()

        //Verify the title of the page
        cy.title()
            .should('eq', 'Todo App')

        //Verify the existing todo items
        ToDo.getToDoList()
            .should('have.length', 3)
            
    })

    it('Successfully add a new to-do item', () => {

        //Verify the add new field is visible
        ToDo.getAddField()
            .should('be.visible')

        //Type the text into the new field
        ToDo.addNewToDo('New Test Item{enter}')

        //Verify the newly added text
        ToDo.getToDoList()
            .eq(3)
            .contains('New Test Item')

        //Verify the length of item
        ToDo.getToDoList()
            .should('have.length', 4)

        //Verify the count of item in UI
        ToDo.getNumberOfItemsMsg()
            .should('have.text', '4 items left')

    })

    it('Successfully complete the To-Do item', () => {

        //Click on the checkbox for the first item
        ToDo.clickCheckbox(0)
            .should('be.checked')

        //Verify the count of item in UI
        ToDo.getNumberOfItemsMsg()
            .should('have.text', '2 items left')

    })

    it('Successfully uncheck the completed To-Do item', () => {

        //Click on the checkbox for the first item
        ToDo.clickCheckbox(0)
            .should('be.checked')

        //Click on the checkbox to uncheck the completed item
        ToDo.clickCheckbox(0)
            cy.should('not.be.checked')

        //Verify the count of item in UI
        ToDo.getNumberOfItemsMsg()
            cy.should('have.text', '3 items left')

    })

    it('Verify that the Add New button toggles the Add New Field', () => {

        //Verify the Add New field is visible
        ToDo.getAddField()
            .should('be.visible')
    
        //Click on the Add New button
        ToDo.clickAddNewBtn()

        //Verify the Add New field is not visible
        ToDo.getAddField()
            .should('not.exist')

        //Click on the Add New button
        ToDo.clickAddNewBtn()

        //Verify the Add New field is visible
        ToDo.getAddField()
            .should('be.visible')

    })

    it('Search for the To-Do item', () => {

        //Click on the Search button
        ToDo.clickSearchBtn()

        //Search for an item
        ToDo.searchItem('Learn React')

        //Verify the searched item is seen
        ToDo.getToDoList()
            .eq(0)
            .contains('Learn React')

    })

    it('Filter the Active To-Do item', () => {

        //Click on the checkbox for the first item
        ToDo.clickCheckbox(0)
            .should('be.checked')

        //Click on the Active filter
        ToDo.clickActiveFilter()

        //Verify the number of To-Do item count
        ToDo.getToDoList()
            .should('have.length', 2)

    })

    it('Filter the Completed To-Do item', () => {

        //Click on the checkbox for the first item
        ToDo.clickCheckbox(0)
            .should('be.checked')

        //Click on the Active filter
        ToDo.clickCompletedFilter()

        //Verify the number of To-Do item count
        ToDo.getToDoList()
            .should('have.length', 1)

    })

})