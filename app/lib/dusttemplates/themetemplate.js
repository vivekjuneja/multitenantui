(function() {
  dust.register("theme1", body_0);

  function body_0(chk, ctx) {
    return chk.write("<ul>").section(ctx.get("names"), ctx, {
      "block": body_1
    }, null).write("</ul>");
  }
  function body_1(chk, ctx) {
    return chk.write("<li>").reference(ctx.get("name"), ctx, "h").write("</li>");
  }
  return body_0;
})();

(function() {
  dust.register("theme2", body_0);

  function body_0(chk, ctx) {
    return chk.section(ctx.get("names"), ctx, {
      "block": body_1
    }, null);
  }
  function body_1(chk, ctx) {
    return chk.reference(ctx.get("name"), ctx, "h").write(",");
  }
  return body_0;
})();