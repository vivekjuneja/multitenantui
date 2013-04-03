(function() {
    dust.register("test", body_0);
 
    function body_0(chk, ctx) {
        return chk.write("").reference(ctx.get("name"), ctx, "h");
    }
    return body_0;
})();