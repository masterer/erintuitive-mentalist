import { Component } from '@angular/core';

@Component ({
    selector: 'female-skirts-stickers-one',
    templateUrl: './female-skirts-stickers1.component.html',
    styleUrls: ['../../button_style_down.css', '../../item.css', '../../avatarOptions.css', '../../leftPadding.css']
})

export class FemaleSkirtsStickers1Component {
    removeSkirt () {
        var elem = document.querySelector("#relativeContainer .bottomOverlay");
        if( elem != null ) { elem.parentNode.removeChild(elem); }
    }
    buttonSkirtStyle () {        
        var elemNew = document.querySelector("#relativeContainer .pants");
        if(elemNew !== null){
            elemNew.setAttribute("style", "position: absolute; top: 0; left: 0;");
            elemNew.setAttribute("height", "380");
            elemNew.setAttribute("width", "86");
            elemNew.setAttribute("viewBox", "202.715 584.407 86.593 380.048");
        }
    }
    female_skirt1_sticker1() {
        this.removeSkirt();
        var relativeContainer = document.getElementById("relativeContainer");
        var pantsButton = document.getElementById("female_skirt1_sticker1");
        relativeContainer.innerHTML += pantsButton.innerHTML;
        this.buttonSkirtStyle(); 
        } 
    female_skirt1_sticker10() {
    this.removeSkirt();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_skirt1_sticker10");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtStyle(); 
        } 
    female_skirt1_sticker2() {
    this.removeSkirt();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_skirt1_sticker2");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtStyle(); 
        } 
    female_skirt1_sticker3() {
    this.removeSkirt();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_skirt1_sticker3");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtStyle(); 
        } 
    female_skirt1_sticker4() {
    this.removeSkirt();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_skirt1_sticker4");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtStyle(); 
        } 
    female_skirt1_sticker5() {
    this.removeSkirt();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_skirt1_sticker5");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtStyle(); 
        } 
    female_skirt1_sticker6() {
    this.removeSkirt();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_skirt1_sticker6");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtStyle(); 
        } 
    female_skirt1_sticker7() {
    this.removeSkirt();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_skirt1_sticker7");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtStyle(); 
        } 
    female_skirt1_sticker8() {
    this.removeSkirt();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_skirt1_sticker8");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtStyle(); 
        } 
    female_skirt1_sticker9() {
    this.removeSkirt();
    var relativeContainer = document.getElementById("relativeContainer");
    var pantsButton = document.getElementById("female_skirt1_sticker9");
    relativeContainer.innerHTML += pantsButton.innerHTML;
    this.buttonSkirtStyle(); 
        } 
    
}