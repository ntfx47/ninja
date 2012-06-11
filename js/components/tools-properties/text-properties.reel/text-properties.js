/* <copyright>
This file contains proprietary software owned by Motorola Mobility, Inc.<br/>
No rights, expressed or implied, whatsoever to this software are provided by Motorola Mobility, Inc. hereunder.<br/>
(c) Copyright 2011 Motorola Mobility, Inc.  All Rights Reserved.
</copyright> */

var Montage = require("montage/core/core").Montage;
var Component = require("montage/ui/component").Component;
var ArrayController = require("montage/ui/controller/array-controller").ArrayController;
var ToolProperties = require("js/components/tools-properties/tool-properties").ToolProperties;

exports.TextProperties = Montage.create(ToolProperties, {
    className: {value: null},
    tagType: {value: null},
    fontSelection: {value: null},
    fontSettings: {value: null},
    fontSize: {value: null},
    fontColor: {value: null},
    btnBold: {value: null},
    btnItalic: {value: null},
    btnUnderline: {value: null},
    btnStrikethrough: {value: null},
    txtLink: {value: null},
    linkTarget: {value: null},
    alignLeft: {value: null},
    alignCenter: {value: null},
    alignRight: {value: null},
    alignJustify: {value: null},
    indent: {value: null},
    outdent: {value: null},
    numberedList: {value: null},
    bulletedList: {value: null},
    fontTypes: {value: null},
    fontSizes: {value: null},

    prepareForDraw: {
        value: function() {
            // code commented out because montage ui element select-input is incomplete. Will switch back when they fix or actually complete the component
//            this.fontTypes = Montage.create(ArrayController);
//            this.fontTypes.content = [
//                { value: "Arial", text: "Arial" },
//                { value: "Arial Black", text: "Arial Black" },
//                { value: "Courier New", text: "Courier New" },
//                { value: "Garamond", text: "Garamond" },
//                { value: "Georgia", text: "Georgia" },
//                { value: "Open Sans", text: "Open Sans" },
//                { value: "Tahoma", text: "Tahoma" },
//                { value: "Times New Roman", text: "Times New Roman" },
//                { value: "Trebuchet MS", text: "Trebuchet MS" },
//                { value: "Verdana", text: "Verdana" }
//            ];

            //this.fontSelection.contentController = this.fontTypes;
//
//            this.fontSizes = Montage.create(ArrayController);
//            this.fontSizes.content = [
//                { value: 1, text: "8pt" },
//                { value: 2, text: "10pt" },
//                { value: 3, text: "12pt" },
//                { value: 4, text: "14pt" },
//                { value: 5, text: "18pt" },
//                { value: 6, text: "24pt" },
//                { value: 7, text: "36pt" }
//            ];
//            this.fontSize.contentController = this.fontSizes;
            
            this.fontSelection.items = ["Arial", "Arial Black", "Courier New", "Garamond", "Georgia",  "Open Sans", "Tahoma", "Times New Roman", "Trebuchet MS", "Verdana"];
            this.fontSize.items = ["8pt","10pt","12pt","14pt","18pt","24pt","36pt"];
            this.tagType.items = ["div", "span", "p", "section", "article", "h1", "h2", "h3", "h4", "h5", "h6"];
        }
    },

    handleEditorSelect: {
        value: function(e) {
            //this.application.ninja.stage.textTool.updateStates();
//            this.fontSelection.value = this.application.ninja.stage.textTool.states.fontname;
//
//            for( var i = 0; i < this.fontSize.items.length; i++) {
//                if (this.application.ninja.stage.textTool.states.fontsize == i + 1) {
//                    this.fontSize.value = this.fontSize.items[i]
//                    break;
//                }
//            }
        }
    },

    _subPrepare: {
        value: function() {
            //this.divElement.addEventListener("click", this, false);
        }
    },

    handleClick: {
        value: function(event) {
           // this.selectedElement = event._event.target.id;

        }
    },
    
    handleAlignLeftAction: {
        value: function(e) {
            //this.alignLeft.value = false;
            this.alignCenter.value = false;
            this.alignRight.value = false;
            this.alignJustify.value = false;
            this.application.ninja.stage.textTool.doAction("justifyleft");
        }
    },

    handleAlignCenterAction: {
        value: function(e) {
            this.alignLeft.value = false;
            //this.alignCenter.value = false;
            this.alignRight.value = false;
            this.alignJustify.value = false;
            this.application.ninja.stage.textTool.doAction("justifycenter");
        }
    },

    handleAlignRightAction: {
        value: function(e) {
            this.alignLeft.value = false;
            this.alignCenter.value = false;
            //this.alignRight.value = false;
            this.alignJustify.value = false;
            this.application.ninja.stage.textTool.doAction("justifyright");
        }
    },

    handleAlignJustifyAction: {
        value: function(e) {
            this.alignLeft.value = false;
            this.alignCenter.value = false;
            this.alignRight.value = false;
            //this.alignJustify.value = false;
            this.application.ninja.stage.textTool.doAction("justifyfull");
        }
    },

    handleIndentAction: {
        value: function(e) {
            this.application.ninja.stage.textTool.doAction("indent");
        }
    },

    handleOutdentAction: {
        value: function(e) {
            this.application.ninja.stage.textTool.doAction("outdent");
        }
    },

    handleBulletedListAction: {
        value: function(e) {
            this.application.ninja.stage.textTool.doAction("insertunorderedlist");
        }
    },

    handleNumberedListAction: {
        value: function(e) {
            this.application.ninja.stage.textTool.doAction("insertorderedlist");
        }
    },

    handleFontSizeChange: {
        value: function(e) {
            //We need the index of whats selected. This is a temporary solution til we can have a variable amount for font-size.
            for( var i = 0; i < this.fontSize.items.length; i++) {
                if (this.fontSize.value === this.fontSize.items[i]) {
                    this.application.ninja.stage.textTool.doAction("fontsize", (i +1));
                    break;
                }
            }
        }
    },

    defineInitialProperties: {
        value: function() {
            if (!this.initialized) {

                //Setup Font Selection tool
                this.fontColor.props = {side: 'top', align: 'center', wheel: true, palette: true, gradient: false, image: false, nocolor: true, offset: -80};
                this.application.ninja.colorController.addButton("chip", this.fontColor);
                this.fontColor.color('rgb', {wasSetByCode: true, type: 'change', color: {r: 0, g: 0, b: 0}, css: 'rgb(0,0,0)'});
                this.fontColor.addEventListener("change",this.handleFontColorChange.bind(this),false);

                this.application.ninja.stage.textTool.addEventListener("editorSelect", this, false);

                Object.defineBinding(this.btnBold, "pressed", {
                  boundObject: this.application.ninja.stage.textTool,
                  boundObjectPropertyPath: "bold",
                  oneway: false
                });

                Object.defineBinding(this.btnItalic, "pressed", {
                  boundObject: this.application.ninja.stage.textTool,
                  boundObjectPropertyPath: "italic",
                  oneway: false
                });

                Object.defineBinding(this.btnUnderline, "pressed", {
                  boundObject: this.application.ninja.stage.textTool,
                  boundObjectPropertyPath: "underline",
                  oneway: false
                });

                Object.defineBinding(this.btnStrikethrough, "pressed", {
                  boundObject: this.application.ninja.stage.textTool,
                  boundObjectPropertyPath: "strikeThrough",
                  oneway: false
                });

                Object.defineBinding(this.alignLeft, "pressed", {
                  boundObject: this.application.ninja.stage.textTool,
                  boundObjectPropertyPath: "justify",
                  boundValueMutator: this.validateJustify,
                  oneway: false
                });
//
//                Object.defineBinding(this.alignCenter, "pressed", {
//                  boundObject: this.application.ninja.stage.textTool,
//                  boundObjectPropertyPath: "justifycenter",
//                  boundValueMutator: this.validatePressed,
//                  oneway: true
//                });
//
//                Object.defineBinding(this.alignRight, "pressed", {
//                  boundObject: this.application.ninja.stage.textTool,
//                  boundObjectPropertyPath: "justifyright",
//                  boundValueMutator: this.validatePressed,
//                  oneway: true
//                });
//
//                Object.defineBinding(this.alignJustify, "pressed", {
//                  boundObject: this.application.ninja.stage.textTool,
//                  boundObjectPropertyPath: "justifyfull",
//                  boundValueMutator: this.validatePressed,
//                  oneway: true
//                });
//
//                Object.defineBinding(this.numberedList, "pressed", {
//                  boundObject: this.application.ninja.stage.textTool,
//                  boundObjectPropertyPath: "insertorderedlist",
//                  boundValueMutator: this.validatePressed,
//                  oneway: true
//                });
//
//                Object.defineBinding(this.bulletedList, "pressed", {
//                  boundObject: this.application.ninja.stage.textTool,
//                  boundObjectPropertyPath: "insertunorderedlist",
//                  boundValueMutator: this.validatePressed,
//                  oneway: true
//                });
//
//                Object.defineBinding(this.fontSelection, "value", {
//                  boundObject: this.application.ninja.stage.textTool,
//                  boundObjectPropertyPath: "fontname",
//                  boundValueMutator: this.validateFont,
//                  oneway: true
//                });
//
//                Object.defineBinding(this.fontSize, "value", {
//                  boundObject: this.application.ninja.stage.textTool,
//                  boundObjectPropertyPath: "states.fontsize",
//                  boundValueMutator: this.validateFontSize.bind(this),
//                  oneway: true
//                });

                this.initialized = true;
            }

        }
    },

    validatePressed: {
        value: function(val) {
            if (val == "true") return true; else return false
        }
    },

    validateFont: {
        value: function(val) {
            return val;
        }
    },

    validateFontSize: {
        value: function(val) {
            val = parseInt(val);
            return this.fontSize.items[val - 1];
        }
    },

    initialized: {
        value: false
    },

    handleFontSelectionChange: {
        value: function(e) {
            this.application.ninja.stage.textTool.doAction("fontname", this.fontSelection.value);
            this.application.ninja.stage.textTool.element.focus();
        }
    },

    handleFontColorChange: {
        value: function(e) {
            this.application.ninja.stage.textTool.element.style.color = e._event.color.css;
            this.application.ninja.stage.textTool.element.focus();
            //this.application.ninja.stage.textTool.doAction("forecolor",e._event.color.css);

        }
    }


});