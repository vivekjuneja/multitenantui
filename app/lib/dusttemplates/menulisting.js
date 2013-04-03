(function() {
  dust.register("menulisting", body_0);

  function body_0(chk, ctx) {
    return chk.write("<ul>").section(ctx.get("menus"), ctx, {
      "block": body_1
    }, null).write("</ul>");
  }
  function body_1(chk, ctx) {
    return chk.write("<li>").reference(ctx.get("id"), ctx, "h").write("</li>");
  }
  return body_0;
})();