(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(6),s=c.n(o),i=(c(12),c(5)),a=c(3),r=(c(13),c(2)),d=(c(14),c(0));var j=function(e){var t=e.onInsert,c=Object(n.useState)(""),o=Object(a.a)(c,2),s=o[0],i=o[1],j=Object(n.useCallback)((function(e){i(e.target.value)}),[]),u=Object(n.useCallback)((function(e){t(s),i(""),e.preventDefault()}),[s]);return Object(d.jsxs)("form",{action:"/",className:"TodoInsert",onSubmit:u,children:[Object(d.jsx)("input",{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:s,onChange:j}),Object(d.jsx)("button",{type:"submit",children:Object(d.jsx)(r.a,{})})]})},u=c(7),l=c.n(u);c(16);var b=function(e){var t=e.todo,c=e.onRemove,n=e.onToggle,o=t.id,s=t.text,i=t.checked;return Object(d.jsxs)("div",{className:"TodoListItem",children:[Object(d.jsxs)("div",{className:l()("Checkbox",{checked:i}),onClick:function(){return n(o)},children:[i?Object(d.jsx)(r.b,{}):Object(d.jsx)(r.c,{}),Object(d.jsx)("div",{className:"text",children:s})]}),Object(d.jsx)("div",{className:"remove",onClick:function(){return c(o)},children:Object(d.jsx)(r.d,{})})]})};c(17);var O=function(e){var t=e.todos,c=e.onRemove,n=e.onToggle;return Object(d.jsx)("div",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(b,{todo:e,onRemove:c,onToggle:n},e.id)}))})};c(18);var v=function(e){var t=e.children;return Object(d.jsxs)("div",{className:"TodoTemplate",children:[Object(d.jsx)("div",{className:"app-title",children:"\uc77c\uc815 \uad00\ub9ac"}),Object(d.jsx)("div",{className:"content",children:t})]})};var x=function(){var e=Object(n.useState)([{id:1,text:"\uc6b4\ub3d9\ud558\uae30",checked:!0},{id:2,text:"\uc694\ub9ac\ud558\uae30",checked:!0},{id:3,text:"\ud559\uc6d0\uac00\uae30",checked:!1}]),t=Object(a.a)(e,2),c=t[0],o=t[1],s=Object(n.useRef)(4),r=Object(n.useCallback)((function(e){var t={id:s.current,text:e,checked:!1};o(c.concat(t)),s.current+=1}),[c]),u=Object(n.useCallback)((function(e){o(c.filter((function(t){return t.id!==e})))}),[c]),l=Object(n.useCallback)((function(e){o(c.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{checked:!t.checked}):t})))}),[c]);return Object(d.jsxs)(v,{children:[Object(d.jsx)(j,{onInsert:r}),Object(d.jsx)(O,{todos:c,onRemove:u,onToggle:l}),Object(d.jsx)("div",{children:"Todo App\uc744 \ub9cc\ub4ed\ub2c8\ub2e4."})]})};s.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.af5ad5c6.chunk.js.map