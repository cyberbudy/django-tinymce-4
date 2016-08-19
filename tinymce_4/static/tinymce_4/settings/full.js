/* eslint-disable */

'use strict';

if ($ === undefined) $ = django.jQuery;

if (typeof tinySettings === 'object') {
  if (typeof externalPlugins === 'object') {
    tinySettings.external_plugins = externalPlugins;
  }
  if (typeof templates === 'object') {
    tinySettings.templates = templates;
  }
  tinymce.init(tinySettings);
} else {
  console.warn('tinySettings is not exists');
}
<<<<<<< HEAD
=======

tinymce.init({
  height: '350px',
  selector: 'textarea.tinymce',
  // language_url : '/static/tinymce_4/langs/ru.js',
  theme: 'modern',
  relative_urls: false,
  convert_urls: false,
  valid_elements: '*[*]',
  content_css: [
    '/static/tinymce_4/css/__tinymce_4.css?' + new Date().getTime()
  ],

  plugins: [
    'advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker',
    'searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking',
    'save table contextmenu directionality emoticons template paste textcolor'
  ],

  plugin_preview_width : '730',
  plugin_preview_height : '550',

  menu : {
    edit: {
      title : 'Edit',
      items : 'undo redo | cut copy paste pastetext | selectall'
    },
    insert : {
      title : 'Insert',
      items : 'link image media | template'
    },
    view: {
      title : 'View'  ,
      items : 'visualaid, visualblocks'
    },
    format: {
      title : 'Format',
      items : 'bold italic underline strikethrough superscript subscript | formats | removeformat'
    },
    table: {
      title : 'Table' ,
      items : 'inserttable tableprops deletetable | cell row column'
    }
  },

  toolbar1: 'insertfile undo redo | styleselect removeformat | link image media template | code | preview | image_alignment',
  toolbar2: 'fontsizeselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | forecolor backcolor',

  setup: function(editor) {
    editor.addButton('image_alignment', {
      type: 'menubutton',
      text: 'Image alignment',
      icon: false,
      menu: [
        {
          text: 'Not set', onclick: function() {
            change_image_alignment(editor.selection.getNode(), false);
          }
        }, {
          text: 'Left', onclick: function() {
            change_image_alignment(editor.selection.getNode(),
              {'float': 'left'});
          }
        }, {
          text: 'Right', onclick: function() {
            change_image_alignment(editor.selection.getNode(),
              {'float': 'right'});
          }
        }, {
          text: 'Baseline', onclick: function() {
            change_image_alignment(editor.selection.getNode(),
              {'vertical-align': 'baseline'});
          }
        }, {
          text: 'Top', onclick: function() {
            change_image_alignment(editor.selection.getNode(),
              {'vertical-align': 'top'});
          }
        }, {
          text: 'Middle', onclick: function() {
            change_image_alignment(editor.selection.getNode(),
              {'vertical-align': 'middle'});
          }
        }, {
          text: 'Bottom', onclick: function() {
            change_image_alignment(editor.selection.getNode(),
              {'vertical-align': 'bottom'});
          }
        }, {
          text: 'Text Top', onclick: function() {
            change_image_alignment(editor.selection.getNode(),
              {'vertical-align': 'text-top'});
          }
        }, {
          text: 'Text Bottom', onclick: function() {
            change_image_alignment(editor.selection.getNode(),
              {'vertical-align': 'text-bottom'});
          }
        }
      ]
    });
  },

  style_formats: [
    { title: 'Headers', items: [
      { title: 'Header 1', format: 'h1' },
      { title: 'Header 2', format: 'h2' },
      { title: 'Header 3', format: 'h3' },
      { title: 'Header 4', format: 'h4' },
      { title: 'Header 5', format: 'h5' },
      { title: 'Header 6', format: 'h6' }
    ]},
    { title: 'Inline', items: [
      { title: 'Bold', icon: 'bold', format: 'bold' },
      { title: 'Italic', icon: 'italic', format: 'italic' },
      { title: 'Underline', icon: 'underline', format: 'underline' },
      { title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough' },
      { title: 'Superscript', icon: 'superscript', format: 'superscript' },
      { title: 'Subscript', icon: 'subscript', format: 'subscript' },
      { title: 'Code', icon: 'code', format: 'code' }
    ]},
    { title: 'Blocks', items: [
      { title: 'Paragraph', format: 'p' },
      { title: 'Blockquote', format: 'blockquote' },
      { title: 'Div', format: 'div' },
      { title: 'Pre', format: 'pre' }
    ]},
    { title: 'Alignment', items: [
      { title: 'Left', icon: 'alignleft', format: 'alignleft' },
      { title: 'Center', icon: 'aligncenter', format: 'aligncenter' },
      { title: 'Right', icon: 'alignright', format: 'alignright' },
      { title: 'Justify', icon: 'alignjustify', format: 'alignjustify' }
    ]}
  ],
  fontsize_formats: '8px 10px 12px 14px 16px 18px 20px 22px 24px 26px 28px 36px 48px 72px',

  // Callbacks
  file_browser_callback: DjangoFilebrowser
});
>>>>>>> ac8acae39de0ebfc1052b767b2800953f042a6ce
