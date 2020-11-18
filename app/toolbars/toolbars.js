const simpleToolbar = `
<div role="toolbar">
    <button>Action</button>
</div>
`


export default class Toolbars extends crsbinding.classes.ViewBase {
    async preLoad() {
        this.setProperty("example", simpleToolbar);
    }
}