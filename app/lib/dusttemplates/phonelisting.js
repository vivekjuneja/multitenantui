(function() {
  dust.register("phonelisting", body_0);

  function body_0(chk, ctx) {
    return chk.section(ctx.get("names"), ctx, {
      "block": body_1
    }, null);
  }
  function body_1(chk, ctx) {
    return chk.reference(ctx.get("title"), ctx, "h").write(" ").reference(ctx.get("name"), ctx, "h").write("\n");
  }
  return body_0;
})();