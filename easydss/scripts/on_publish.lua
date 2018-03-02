local http = require "resty.http"
local cjson = require "cjson.safe"

local _M = {}
_M._VERSION = '1.0'

local mt = { __index = _M }

function _M.on_publish(args)
    local app = args.app
    local name = args.name
    local sign = args.sign or ""
    local tm = args.tm or ""

    local req_url = "http://127.0.0.1:10088/api/livecheck"
    local req_body = "sign=" .. sign .. "&tm=" .. tm

    ngx.log(ngx.ERR, req_body)
    local httpc = http.new()
    local res, err = httpc:request_uri(req_url, {
        method = "POST",
        body = req_body,
        headers = {
            ["Content-Length"] = #req_body,
            ["Content-Type"] = "application/x-www-form-urlencoded",
            ["Connection"] = "keep-alive"
        }
    })

    if not res then
        ngx.log(ngx.ERR, "failed to request: ", err)
        httpc:close()
        return false
    end

    local data = cjson.decode(res.body)
    if not data or not data.result then
        httpc:close()
        return false
    end

    if data.result == 0 then
        httpc:close()
        return false
    end

    httpc:close()

    return true
end

return _M