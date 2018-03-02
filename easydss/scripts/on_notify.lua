ngx.req.read_body()
local args = ngx.req.get_post_args()
local call = args.call

if not call then
    ngx.log(ngx.ERR, "notify empty call")
    ngx.exit(ngx.HTTP_BAD_REQUEST)
end

if call == "publish" or call == "update_publish" then
    local on = require "scripts.on_publish"
    if not on.on_publish(args) then
        ngx.exit(ngx.HTTP_BAD_REQUEST)
    end
elseif call == "update_play" then
    ngx.exit(ngx.HTTP_OK)
else
    ngx.log(ngx.ERR, "notify bad call: " .. call)
    ngx.exit(ngx.HTTP_BAD_REQUEST)
end

ngx.exit(ngx.HTTP_OK)