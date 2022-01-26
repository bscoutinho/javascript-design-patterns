/* 
Strategy
It allows one of the algorithms to be selected in certain situations.

According to Wikipedia:
The strategy pattern is a behavioral software design pattern that enables selecting an algorithm at runtime. 
Instead of implementing a single algorithm directly, code receives run-time instructions as to which in a family of algorithms to use.
*/

/* 
Example
We will take an example in which we have a text processor that will display data based on strategy(HTML or Markdown).
*/

let OutputFormat = Object.freeze({
    markdown: 0,
    html: 1,
})

class ListStrategy {
    start(buffer) {}
    end(buffer) {}
    addListItem(buffer, item) {}
}

class MarkdownListStrategy extends ListStrategy {
    addListItem(buffer, item) {
        buffer.push(` * ${item}`)
    }
}

class HtmlListStrategy extends ListStrategy {
    start(buffer) {
        buffer.push('<ul>')
    }
    end(buffer) {
        buffer.push('</ul>')
    }
    addListItem(buffer, item) {
        buffer.push(` * ${item}`)
    }
}

// Creating TextProcessor class

class TextProcessor {
    constructor(outputFormat) {
        this.buffer = [];
        this.setOutputFormat(outputFormat);
    }
    setOutputFormat(format) {
        switch(format) {
            case OutputFormat.markdown:
                this.listStategy = new MarkdownListStrategy();
                break;
            case OutputFormat.html:
                this.listStategy = new HtmlListStrategy();
                break;
        }
    }
    appendList(items) {
        this.listStrategy.start(this.buffer);
        for (let item of items) {
            this.listStategy.addListItem(this.buffer, item);
        }
        this.listStategy.end(this.buffer);
    }
    clear() {
        this.buffer = [];
    }
    toString() {
        return this.buffer.join('\n')
    }
}

// results
let tp = new TextProcessor();
tp.setOutputFormat(OutputFormat.markdown);
tp.appendList(['one','two','three']);
console.log(tp.toString())

tp.clear()
tp.setOutputFormat(OutputFormat.html);
tp.appendList(['one','two','three']);
console.log(tp.toString())