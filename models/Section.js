var keystone = require('keystone'),
    Types = keystone.Field.Types;

/**
 * Section Model
 * ==========
 */

var Section = new keystone.List('Section', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true } ,
    track: {createdAt: true}
});

Section.add({
    title: { type: String, required: true },
    state: { type: Types.Select, options: 'draft, published, archived', default: 'draft', index: true },
    publishedDate: { type: Types.Date, index: true, dependsOn: { state: 'published' } },
    section: {
        title: { type: Types.Text },
        content: { type: Types.Html, wysiwyg: true, height: 400 }
    }
});

Section.schema.virtual('content.full').get(function() {
    return this.content.extended || this.content.brief;
});

Section.defaultColumns = 'title, state|20%, publishedDate|20%';
Section.register();
