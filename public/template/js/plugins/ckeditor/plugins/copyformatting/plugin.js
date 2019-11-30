/*
 Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
*/
(function () {
  function k (a, b, d, e) { var c = new CKEDITOR.dom.walker(a); if (a = a.startContainer.getAscendant(b, !0) || a.endContainer.getAscendant(b, !0)) if (d(a), e) return; for (;a = c.next();) if (a = a.getAscendant(b, !0)) if (d(a), e) break } function u (a, b) { var d = { ul: 'ol', ol: 'ul' }; return l(b, function (b) { return b.element === a || b.element === d[a] }) !== -1 } function q (a) {
    this.styles = null; this.sticky = !1; this.editor = a; this.filter = new CKEDITOR.filter(a, a.config.copyFormatting_allowRules); !0 === a.config.copyFormatting_allowRules && (this.filter.disabled =
!0); a.config.copyFormatting_disallowRules && this.filter.disallow(a.config.copyFormatting_disallowRules)
  } var l = CKEDITOR.tools.indexOf; var r = CKEDITOR.tools.getMouseButton; var t = !1; CKEDITOR.plugins.add('copyformatting', {
    lang: 'az,de,en,it,ja,nb,nl,oc,pl,pt-br,ru,sv,tr,zh,zh-cn',
    icons: 'copyformatting',
    hidpi: !0,
    init: function (a) {
      var b = CKEDITOR.plugins.copyformatting; b._addScreenReaderContainer(); t || (CKEDITOR.document.appendStyleSheet(this.path + 'styles/copyformatting.css'), t = !0); a.addContentsCss && a.addContentsCss(this.path +
'styles/copyformatting.css'); a.copyFormatting = new b.state(a); a.addCommand('copyFormatting', b.commands.copyFormatting); a.addCommand('applyFormatting', b.commands.applyFormatting); a.ui.addButton('CopyFormatting', { label: a.lang.copyformatting.label, command: 'copyFormatting', toolbar: 'cleanup,0' }); a.on('contentDom', function () {
        var d = a.editable(); var b = d.isInline() ? d : a.document; var c = a.ui.get('CopyFormatting'); d.attachListener(b, 'mouseup', function (b) { r(b) === CKEDITOR.MOUSE_BUTTON_LEFT && a.execCommand('applyFormatting') })
        d.attachListener(CKEDITOR.document, 'mouseup', function (b) { var e = a.getCommand('copyFormatting'); r(b) !== CKEDITOR.MOUSE_BUTTON_LEFT || e.state !== CKEDITOR.TRISTATE_ON || d.contains(b.data.getTarget()) || a.execCommand('copyFormatting') }); c && (b = CKEDITOR.document.getById(c._.id), d.attachListener(b, 'dblclick', function () { a.execCommand('copyFormatting', { sticky: !0 }) }), d.attachListener(b, 'mouseup', function (a) { a.data.stopPropagation() }))
      }); a.config.copyFormatting_keystrokeCopy && a.setKeystroke(a.config.copyFormatting_keystrokeCopy,
        'copyFormatting'); a.on('key', function (b) { var e = a.getCommand('copyFormatting'); b = b.data.domEvent; b.getKeystroke && b.getKeystroke() === 27 && e.state === CKEDITOR.TRISTATE_ON && a.execCommand('copyFormatting') }); a.copyFormatting.on('extractFormatting', function (d) { var e = d.data.element; if (e.contains(a.editable()) || e.equals(a.editable())) return d.cancel(); e = b._convertElementToStyleDef(e); if (!a.copyFormatting.filter.check(new CKEDITOR.style(e), !0, !0)) return d.cancel(); d.data.styleDef = e }); a.copyFormatting.on('applyFormatting',
        function (d) { if (!d.data.preventFormatStripping) { var e = d.data.range; var c = b._extractStylesFromRange(a, e); var f = b._determineContext(e); var g; var h; if (a.copyFormatting._isContextAllowed(f)) for (h = 0; h < c.length; h++)f = c[h], g = e.createBookmark(), l(b.preservedElements, f.element) === -1 ? CKEDITOR.env.webkit && !CKEDITOR.env.chrome ? c[h].removeFromRange(d.data.range, d.editor) : c[h].remove(d.editor) : u(f.element, d.data.styles) && b._removeStylesFromElementInRange(e, f.element), e.moveToBookmark(g) } }); a.copyFormatting.on('applyFormatting',
        function (b) { var e = CKEDITOR.plugins.copyformatting; var c = e._determineContext(b.data.range); c === 'list' && a.copyFormatting._isContextAllowed('list') ? e._applyStylesToListContext(b.editor, b.data.range, b.data.styles) : c === 'table' && a.copyFormatting._isContextAllowed('table') ? e._applyStylesToTableContext(b.editor, b.data.range, b.data.styles) : a.copyFormatting._isContextAllowed('text') && e._applyStylesToTextContext(b.editor, b.data.range, b.data.styles) }, null, null, 999)
    }
  }); q.prototype._isContextAllowed = function (a) {
    var b =
this.editor.config.copyFormatting_allowedContexts; return !0 === b || l(b, a) !== -1
  }; CKEDITOR.event.implementOn(q.prototype); CKEDITOR.plugins.copyformatting = {
    state: q,
    inlineBoundary: 'h1 h2 h3 h4 h5 h6 p div'.split(' '),
    excludedAttributes: ['id', 'style', 'href', 'data-cke-saved-href', 'dir'],
    elementsForInlineTransform: ['li'],
    excludedElementsFromInlineTransform: ['table', 'thead', 'tbody', 'ul', 'ol'],
    excludedAttributesFromInlineTransform: ['value', 'type'],
    preservedElements: 'ul ol li td th tr thead tbody table'.split(' '),
    breakOnElements: ['ul', 'ol', 'table'],
    _initialKeystrokePasteCommand: null,
    commands: {
      copyFormatting: {
        exec: function (a, b) {
          var d = CKEDITOR.plugins.copyformatting; var e = a.copyFormatting; var c = b ? b.from == 'keystrokeHandler' : !1; var f = b ? b.sticky || c : !1; var g = d._getCursorContainer(a); var h = CKEDITOR.document.getDocumentElement(); if (this.state === CKEDITOR.TRISTATE_ON) {
            return e.styles = null, e.sticky = !1, g.removeClass('cke_copyformatting_active'), h.removeClass('cke_copyformatting_disabled'), h.removeClass('cke_copyformatting_tableresize_cursor'),
            d._putScreenReaderMessage(a, 'canceled'), d._detachPasteKeystrokeHandler(a), this.setState(CKEDITOR.TRISTATE_OFF)
          } e.styles = d._extractStylesFromElement(a, a.elementPath().lastElement); this.setState(CKEDITOR.TRISTATE_ON); c || (g.addClass('cke_copyformatting_active'), h.addClass('cke_copyformatting_tableresize_cursor'), a.config.copyFormatting_outerCursor && h.addClass('cke_copyformatting_disabled')); e.sticky = f; d._putScreenReaderMessage(a, 'copied'); d._attachPasteKeystrokeHandler(a)
        }
      },
      applyFormatting: {
        editorFocus: CKEDITOR.env.ie &&
!CKEDITOR.env.edge ? !1 : !0,
        exec: function (a, b) {
          var d = a.getCommand('copyFormatting'); var e = b ? b.from == 'keystrokeHandler' : !1; var c = CKEDITOR.plugins.copyformatting; var f = a.copyFormatting; var g = c._getCursorContainer(a); var h = CKEDITOR.document.getDocumentElement(); if (e || d.state === CKEDITOR.TRISTATE_ON) {
            if (e && !f.styles) return c._putScreenReaderMessage(a, 'failed'), c._detachPasteKeystrokeHandler(a), !1; e = c._applyFormat(a, f.styles); f.sticky || (f.styles = null, g.removeClass('cke_copyformatting_active'), h.removeClass('cke_copyformatting_disabled'),
            h.removeClass('cke_copyformatting_tableresize_cursor'), d.setState(CKEDITOR.TRISTATE_OFF), c._detachPasteKeystrokeHandler(a)); c._putScreenReaderMessage(a, e ? 'applied' : 'canceled')
          }
        }
      }
    },
    _getCursorContainer: function (a) { return a.elementMode === CKEDITOR.ELEMENT_MODE_INLINE ? a.editable() : a.editable().getParent() },
    _convertElementToStyleDef: function (a) {
      var b = CKEDITOR.tools; var d = a.getAttributes(CKEDITOR.plugins.copyformatting.excludedAttributes); var b = b.parseCssText(a.getAttribute('style'), !0, !0); return {
        element: a.getName(),
        type: CKEDITOR.STYLE_INLINE,
        attributes: d,
        styles: b
      }
    },
    _extractStylesFromElement: function (a, b) { var d = {}; var e = []; do if (b.type === CKEDITOR.NODE_ELEMENT && !b.hasAttribute('data-cke-bookmark') && (d.element = b, a.copyFormatting.fire('extractFormatting', d, a) && d.styleDef && e.push(new CKEDITOR.style(d.styleDef)), b.getName && l(CKEDITOR.plugins.copyformatting.breakOnElements, b.getName()) !== -1)) break; while ((b = b.getParent()) && b.type === CKEDITOR.NODE_ELEMENT);return e },
    _extractStylesFromRange: function (a, b) {
      for (var d = [], e = new CKEDITOR.dom.walker(b),
        c; c = e.next();)d = d.concat(CKEDITOR.plugins.copyformatting._extractStylesFromElement(a, c)); return d
    },
    _removeStylesFromElementInRange: function (a, b) { for (var d = l(['ol', 'ul', 'table'], b) !== -1, e = new CKEDITOR.dom.walker(a), c; c = e.next();) if (c = c.getAscendant(b, !0)) if (c.removeAttributes(c.getAttributes()), d) break },
    _getSelectedWordOffset: function (a) {
      function b (a, b) { return a[b ? 'getPrevious' : 'getNext'](function (a) { return a.type !== CKEDITOR.NODE_COMMENT }) } function d (a) {
        return a.type == CKEDITOR.NODE_ELEMENT ? (a = a.getHtml().replace(/<span.*?>&nbsp;<\/span>/g,
          ''), a.replace(/<.*?>/g, '')) : a.getText()
      } function e (a, c) {
        var f = a; var g = /\s/g; var h = 'p br ol ul li td th div caption body'.split(' '); var m = !1; var k = !1; var p; var n; do { for (p = b(f, c); !p && f.getParent();) { f = f.getParent(); if (l(h, f.getName()) !== -1) { k = m = !0; break }p = b(f, c) } if (p && p.getName && l(h, p.getName()) !== -1) { m = !0; break }f = p } while (f && f.getStyle && (f.getStyle('display') == 'none' || !f.getText()));for (f || (f = a); f.type !== CKEDITOR.NODE_TEXT;)f = !m || c || k ? f.getChild(0) : f.getChild(f.getChildCount() - 1); for (h = d(f); (k = g.exec(h)) != null && (n = k.index,
        c););if (typeof n !== 'number' && !m) return e(f, c); if (m)c ? n = 0 : (g = /([\.\b]*$)/, n = (k = g.exec(h)) ? k.index : h.length); else if (c && (n += 1, n > h.length)) return e(f); return { node: f, offset: n }
      } var c = /\b\w+\b/ig; var f; var g; var h; var m; var k; h = m = k = a.startContainer; for (f = d(h); (g = c.exec(f)) != null;) if (g.index + g[0].length >= a.startOffset) return a = g.index, c = g.index + g[0].length, g.index === 0 && (g = e(h, !0), m = g.node, a = g.offset), c >= f.length && (f = e(h), k = f.node, c = f.offset), { startNode: m, startOffset: a, endNode: k, endOffset: c }; return null
    },
    _filterStyles: function (a) {
      var b =
CKEDITOR.tools.isEmpty; var d = []; var e; var c; for (c = 0; c < a.length; c++)e = a[c]._.definition, CKEDITOR.tools.indexOf(CKEDITOR.plugins.copyformatting.inlineBoundary, e.element) !== -1 && (e.element = a[c].element = 'span'), e.element === 'span' && b(e.attributes) && b(e.styles) || d.push(a[c]); return d
    },
    _determineContext: function (a) {
      function b (b) { var e = new CKEDITOR.dom.walker(a); var c; if (a.startContainer.getAscendant(b, !0) || a.endContainer.getAscendant(b, !0)) return !0; for (;c = e.next();) if (c.getAscendant(b, !0)) return !0 } return b({ ul: 1, ol: 1 })
        ? 'list' : b('table') ? 'table' : 'text'
    },
    _applyStylesToTextContext: function (a, b, d) {
      var e = CKEDITOR.plugins.copyformatting; var c = e.excludedAttributesFromInlineTransform; var f; var g; CKEDITOR.env.webkit && !CKEDITOR.env.chrome && a.getSelection().selectRanges([b]); for (f = 0; f < d.length; f++) {
        if (b = d[f], l(e.excludedElementsFromInlineTransform, b.element) === -1) {
          if (l(e.elementsForInlineTransform, b.element) !== -1) for (b.element = b._.definition.element = 'span', g = 0; g < c.length; g++)b._.definition.attributes[c[g]] && delete b._.definition.attributes[c[g]]
          b.apply(a)
        }
      }
    },
    _applyStylesToListContext: function (a, b, d) { var e, c, f; for (f = 0; f < d.length; f++)e = d[f], c = b.createBookmark(), e.element === 'ol' || e.element === 'ul' ? k(b, { ul: 1, ol: 1 }, function (a) { var b = e; a.getName() !== b.element && a.renameNode(b.element); b.applyToObject(a) }, !0) : e.element === 'li' ? k(b, 'li', function (a) { e.applyToObject(a) }) : CKEDITOR.plugins.copyformatting._applyStylesToTextContext(a, b, [e]), b.moveToBookmark(c) },
    _applyStylesToTableContext: function (a, b, d) {
      function e (a, b) {
        a.getName() !== b.element && (b = b.getDefinition(),
        b.element = a.getName(), b = new CKEDITOR.style(b)); b.applyToObject(a)
      } var c, f, g; for (g = 0; g < d.length; g++)c = d[g], f = b.createBookmark(), l(['table', 'tr'], c.element) !== -1 ? k(b, c.element, function (a) { c.applyToObject(a) }) : l(['td', 'th'], c.element) !== -1 ? k(b, { td: 1, th: 1 }, function (a) { e(a, c) }) : l(['thead', 'tbody'], c.element) !== -1 ? k(b, { thead: 1, tbody: 1 }, function (a) { e(a, c) }) : CKEDITOR.plugins.copyformatting._applyStylesToTextContext(a, b, [c]), b.moveToBookmark(f)
    },
    _applyFormat: function (a, b) {
      var d = a.getSelection().getRanges()[0]
      var e = CKEDITOR.plugins.copyformatting; var c; var f; if (!d) return !1; if (d.collapsed) { f = a.getSelection().createBookmarks(); if (!(c = e._getSelectedWordOffset(d))) return; d = a.createRange(); d.setStart(c.startNode, c.startOffset); d.setEnd(c.endNode, c.endOffset); d.select() }b = e._filterStyles(b); if (!a.copyFormatting.fire('applyFormatting', { styles: b, range: d, preventFormatStripping: !1 }, a)) return !1; f && a.getSelection().selectBookmarks(f); return !0
    },
    _putScreenReaderMessage: function (a, b) { var d = this._getScreenReaderContainer(); d && d.setText(a.lang.copyformatting.notification[b]) },
    _addScreenReaderContainer: function () { if (this._getScreenReaderContainer()) return this._getScreenReaderContainer(); if (!CKEDITOR.env.ie6Compat && !CKEDITOR.env.ie7Compat) return CKEDITOR.document.getBody().append(CKEDITOR.dom.element.createFromHtml('\x3cdiv class\x3d"cke_screen_reader_only cke_copyformatting_notification"\x3e\x3cdiv aria-live\x3d"polite"\x3e\x3c/div\x3e\x3c/div\x3e')).getChild(0) },
    _getScreenReaderContainer: function () { if (!CKEDITOR.env.ie6Compat && !CKEDITOR.env.ie7Compat) return CKEDITOR.document.getBody().findOne('.cke_copyformatting_notification div[aria-live]') },
    _attachPasteKeystrokeHandler: function (a) { var b = a.config.copyFormatting_keystrokePaste; b && (this._initialKeystrokePasteCommand = a.keystrokeHandler.keystrokes[b], a.setKeystroke(b, 'applyFormatting')) },
    _detachPasteKeystrokeHandler: function (a) { var b = a.config.copyFormatting_keystrokePaste; b && a.setKeystroke(b, this._initialKeystrokePasteCommand || !1) }
  }; CKEDITOR.config.copyFormatting_outerCursor = !0; CKEDITOR.config.copyFormatting_allowRules = 'b s u i em strong span p div td th ol ul li(*)[*]{*}'; CKEDITOR.config.copyFormatting_disallowRules =
'*[data-cke-widget*,data-widget*,data-cke-realelement](cke_widget*)'; CKEDITOR.config.copyFormatting_allowedContexts = !0; CKEDITOR.config.copyFormatting_keystrokeCopy = CKEDITOR.CTRL + CKEDITOR.SHIFT + 67; CKEDITOR.config.copyFormatting_keystrokePaste = CKEDITOR.CTRL + CKEDITOR.SHIFT + 86
})()
