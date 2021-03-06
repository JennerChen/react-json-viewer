# json-html-viewer
simple react json html viewer render json data into html

## install

`` yarn add json-html-viewer ``

## usage

```jsx harmony
    import JsonHtmlViewer from 'json-html-viewer';
    import ReactDom from 'react-dom';
    
    ReactDom.render(
    	<JsonHtmlViewer json={ {
                "glossary": {
                    "title": "example glossary",
                    "GlossDiv": {
                        "title": "S",
                        "GlossList": {
                            "GlossEntry": {
                                "ID": "SGML",
                                "SortAs": "SGML",
                                "GlossTerm": "Standard Generalized Markup Language",
                                "Acronym": "SGML",
                                "Abbrev": "ISO 8879:1986",
                                "GlossDef": {
                                    "para": "A meta-markup language, used to create markup languages such as DocBook.",
                                    "GlossSeeAlso": ["GML", "XML"]
                                },
                                "GlossSee": "markup"
                            }
                        }
                    }
                }
               } }/>,document.body
    )
    
```
![result](./examples/screenshot.png)