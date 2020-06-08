/*
 * Add js functions for forms.
 */

require('../../scss/templates/form.scss');

function collection_add_value (element) {
    let list_selector = element.getAttribute('data-list-selector')
    let list = document.getElementById(list_selector)

    let counter = list.getAttribute('data-widget-counter') || list.children.length
    let element_fragment = document.createElement('div')
    element_fragment.innerHTML = list.getAttribute('data-prototype').replace(/__name__/g, counter)
    let widget = element_fragment.firstChild

    list.appendChild(widget)
    list.setAttribute('data-widget-counter', parseInt(counter) + 1)
}
window.collection_add_value = collection_add_value

function collection_delete_value (element) {
    let item_selector = element.getAttribute('data-item-selector')
    let item = document.getElementById(item_selector)
    item.parentNode.remove()
    element.remove()
    return false
}
window.collection_delete_value = collection_delete_value
