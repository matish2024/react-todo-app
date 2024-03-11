/// <reference types="cypress"/>

export default class ToDo {

    //Locators for ToDo page

    static addField = 'input.add-todo'
    static searchField = 'input.search'
    static addNewBtn = 'a.add'
    static searchBtn = 'a.search'
    static filter = 'a'
    static infoText = 'p.info'
    static todoList = 'li.todo-item'
    static checkBox = 'input[type="checkbox"]'
    static numberItemMsg = 'div.pull-left'

    //Methods

    /**
     * Load the site
     */
    static load() {
        cy.visit('/')
    }

    /**
     * Get Add Field
     */
    static getAddField() {
        return cy.get(this.addField)
    }

    /**
     * Get To Do list
     */
    static getToDoList() {
        return cy.get(this.todoList)
    }

    /**
     * Get Number of Items Message
     */
    static getNumberOfItemsMsg() {
        return cy.get(this.numberItemMsg)
    }

    /**
     * Type and add new todo item
     */
    static addNewToDo(text) {
        return cy.get(this.addField)
            .type(text)
    }

    /**
     * Click on the Add New + button
     */
    static clickAddNewBtn() {
        return cy.get(this.addNewBtn)
            .click()
    }

    /**
     * Click on the checkbox
     */
    static clickCheckbox(index) {
        return cy.get(this.checkBox)
            .eq(index)
            .click()
    }

    /**
     * Click on the Seach button
     */
    static clickSearchBtn() {
        return cy.get(this.searchBtn)
            .click()
    }

    /**
     * Search for a To-Do item
     */
    static searchItem(text) {
        return cy.get(this.searchField)
            .type(text)
    }

    /**
     * Click on the All filter
     */
    static clickAllFilter() {
        return cy.get(this.filter)
            .contains('All')
            .click()
    }

    /**
     * Click on the Active filter
     */
    static clickActiveFilter() {
        return cy.get(this.filter)
            .contains('Active')
            .click()
    }

    /**
     * Click on the Completed filter
     */
    static clickCompletedFilter() {
        return cy.get(this.filter)
            .contains('Completed')
            .click()
    }


}