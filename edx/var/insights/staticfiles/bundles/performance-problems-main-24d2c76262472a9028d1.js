webpackJsonp([5],{776:function(e,t,r){"use strict";r.e(0).then(function(){var e=[r(10)];(function(e){r.e(0).then(function(){var t=[r(58),r(16),r(12),r(61)];(function(t,r,n,c){var a,o,l=e.models.courseModel,i=[{key:"correct_submissions",percent_key:"correct_percent",title:gettext("Correct"),className:"text-right",type:"number",color:"#4BB4FB"},{key:"incorrect_submissions",percent_key:"incorrect_percent",title:gettext("Incorrect"),className:"text-right",type:"number",color:"#CA0061"}],s=[{key:"index",title:gettext("Order"),type:"number",className:"text-right"},{key:"name",title:l.get("contentTableHeading"),type:"hasNull"}];s=s.concat(i),s.push({key:"total_submissions",title:gettext("Total"),className:"text-right",type:"number",color:"#4BB4FB"}),s.push({key:"correct_percent",title:gettext("Percentage Correct"),className:"text-right",type:"percent"}),l.get("hasData")&&(a=new c({el:"#chart-view",model:l,modelAttribute:"primaryContent",trends:i}),a.renderIfDataAvailable()),o=new n({el:"[data-role=data-table]",model:l,modelAttribute:"primaryContent",columns:s,sorting:["index"],replaceZero:"-"}),o.renderIfDataAvailable()}).apply(null,t)}).catch(r.oe)}).apply(null,e)}).catch(r.oe)}},[776]);
//# sourceMappingURL=performance-problems-main-24d2c76262472a9028d1.js.map