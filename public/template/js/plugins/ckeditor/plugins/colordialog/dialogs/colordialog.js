/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
CKEDITOR.dialog.add('colordialog', function (x) {
  function m () { e.getById(n).removeStyle('background-color'); p.getContentElement('picker', 'selectedColor').setValue(''); y() } function z (a) { a = a.data.getTarget(); var c; a.getName() == 'td' && (c = a.getChild(0).getHtml()) && (y(), f = a, f.setAttribute('aria-selected', !0), f.addClass('cke_colordialog_selected'), p.getContentElement('picker', 'selectedColor').setValue(c)) } function y () { f && (f.removeClass('cke_colordialog_selected'), f.removeAttribute('aria-selected'), f = null) } function D (a) {
    a =
a.replace(/^#/, ''); for (var c = 0, b = []; c <= 2; c++)b[c] = parseInt(a.substr(2 * c, 2), 16); return 0.2126 * b[0] + 0.7152 * b[1] + 0.0722 * b[2] >= 165
  } function A (a) { !a.name && (a = new CKEDITOR.event(a)); var c = !/mouse/.test(a.name); var b = a.data.getTarget(); var k; b.getName() == 'td' && (k = b.getChild(0).getHtml()) && (q(a), c ? d = b : B = b, c && b.addClass(D(k) ? 'cke_colordialog_focused_light' : 'cke_colordialog_focused_dark'), r(k)) } function q (a) {
    if (a = !/mouse/.test(a.name) && d)a.removeClass('cke_colordialog_focused_light'), a.removeClass('cke_colordialog_focused_dark')
    d || B || r(!1)
  } function r (a) { a ? (e.getById(t).setStyle('background-color', a), e.getById(u).setHtml(a)) : (e.getById(t).removeStyle('background-color'), e.getById(u).setHtml('\x26nbsp;')) } function E (a) {
    var c = a.data; var b = c.getTarget(); var k = c.getKeystroke(); var d = x.lang.dir == 'rtl'; switch (k) {
      case 38:if (a = b.getParent().getPrevious())a = a.getChild([b.getIndex()]), a.focus(); c.preventDefault(); break; case 40:(a = b.getParent().getNext()) && (a = a.getChild([b.getIndex()])) && a.type == 1 && a.focus(); c.preventDefault(); break; case 32:case 13:z(a)
        c.preventDefault(); break; case d ? 37 : 39:(a = b.getNext()) ? a.type == 1 && (a.focus(), c.preventDefault(!0)) : (a = b.getParent().getNext()) && (a = a.getChild([0])) && a.type == 1 && (a.focus(), c.preventDefault(!0)); break; case d ? 39 : 37:if (a = b.getPrevious())a.focus(), c.preventDefault(!0); else if (a = b.getParent().getPrevious())a = a.getLast(), a.focus(), c.preventDefault(!0)
    }
  } var v = CKEDITOR.dom.element; var e = CKEDITOR.document; var g = x.lang.colordialog; var p; var f; var C = { type: 'html', html: '\x26nbsp;' }; var l = function (a) {
    return CKEDITOR.tools.getNextId() + '_' +
a
  }; var t = l('hicolor'); var u = l('hicolortext'); var n = l('selhicolor'); var h; var d; var B; (function () {
    function a (a, d) { for (var w = a; w < a + 3; w++) { var e = new v(h.$.insertRow(-1)); e.setAttribute('role', 'row'); for (var f = d; f < d + 3; f++) for (var g = 0; g < 6; g++)c(e.$, '#' + b[f] + b[g] + b[w]) } } function c (a, c) {
      var b = new v(a.insertCell(-1)); b.setAttribute('class', 'ColorCell cke_colordialog_colorcell'); b.setAttribute('tabIndex', -1); b.setAttribute('role', 'gridcell'); b.on('keydown', E); b.on('click', z); b.on('focus', A); b.on('blur', q); b.setStyle('background-color',
        c); var d = l('color_table_cell'); b.setAttribute('aria-labelledby', d); b.append(CKEDITOR.dom.element.createFromHtml('\x3cspan id\x3d"' + d + '" class\x3d"cke_voice_label"\x3e' + c + '\x3c/span\x3e', CKEDITOR.document))
    }h = CKEDITOR.dom.element.createFromHtml('\x3ctable tabIndex\x3d"-1" class\x3d"cke_colordialog_table" aria-label\x3d"' + g.options + '" role\x3d"grid" style\x3d"border-collapse:separate;" cellspacing\x3d"0"\x3e\x3ccaption class\x3d"cke_voice_label"\x3e' + g.options + '\x3c/caption\x3e\x3ctbody role\x3d"presentation"\x3e\x3c/tbody\x3e\x3c/table\x3e')
    h.on('mouseover', A); h.on('mouseout', q); var b = '00 33 66 99 cc ff'.split(' '); a(0, 0); a(3, 0); a(0, 3); a(3, 3); var d = new v(h.$.insertRow(-1)); d.setAttribute('role', 'row'); c(d.$, '#000000'); for (var f = 0; f < 16; f++) { var e = f.toString(16); c(d.$, '#' + e + e + e + e + e + e) }c(d.$, '#ffffff')
  })(); CKEDITOR.document.appendStyleSheet(CKEDITOR.getUrl(CKEDITOR.plugins.get('colordialog').path + 'dialogs/colordialog.css')); return {
    title: g.title,
    minWidth: 360,
    minHeight: 220,
    onLoad: function () { p = this },
    onHide: function () {
      m(); d && (d.removeClass('cke_colordialog_focused_light'),
      d.removeClass('cke_colordialog_focused_dark')); r(!1); d = null
    },
    contents: [{
      id: 'picker',
      label: g.title,
      accessKey: 'I',
      elements: [{
        type: 'hbox',
        padding: 0,
        widths: ['70%', '10%', '30%'],
        children: [{ type: 'html', html: '\x3cdiv\x3e\x3c/div\x3e', onLoad: function () { CKEDITOR.document.getById(this.domId).append(h) }, focus: function () { (d || this.getElement().getElementsByTag('td').getItem(0)).focus() } }, C, {
          type: 'vbox',
          padding: 0,
          widths: ['70%', '5%', '25%'],
          children: [{
            type: 'html',
            html: '\x3cspan\x3e' + g.highlight + '\x3c/span\x3e\x3cdiv id\x3d"' +
t + '" style\x3d"border: 1px solid; height: 74px; width: 74px;"\x3e\x3c/div\x3e\x3cdiv id\x3d"' + u + '"\x3e\x26nbsp;\x3c/div\x3e\x3cspan\x3e' + g.selected + '\x3c/span\x3e\x3cdiv id\x3d"' + n + '" style\x3d"border: 1px solid; height: 20px; width: 74px;"\x3e\x3c/div\x3e'
          }, { type: 'text', label: g.selected, labelStyle: 'display:none', id: 'selectedColor', style: 'width: 76px;margin-top:4px', onChange: function () { try { e.getById(n).setStyle('background-color', this.getValue()) } catch (a) { m() } } }, C, {
            type: 'button',
            id: 'clear',
            label: g.clear,
            onClick: m
          }]
        }]
      }]
    }]
  }
})
