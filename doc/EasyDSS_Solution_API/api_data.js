define({ "api": [
  {
    "type": "get | post",
    "url": "/api/operUser?operate=create",
    "title": "03、用户操作-增加",
    "version": "0.1.0",
    "group": "ADMIN_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>用户操作-增加</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>【必填】accessToken</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;create&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_account",
            "description": "<p>【必填】用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>【必填】用户名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_password",
            "description": "<p>【必填】用户密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"创建用户成功!\",\"id\":\"02fc033b6eff4cfc8a0a1de2b844da64\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "ADMIN_API",
    "name": "Get___postApiOperuserOperateCreate"
  },
  {
    "type": "get | post",
    "url": "/api/operUser?operate=delete",
    "title": "05、用户操作-删除",
    "version": "0.1.0",
    "group": "ADMIN_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>用户操作-删除</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>【必填】accessToken</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;delete&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>【必填】用户UUID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"删除用户成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"删除失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "ADMIN_API",
    "name": "Get___postApiOperuserOperateDelete"
  },
  {
    "type": "get | post",
    "url": "/api/operUser?operate=update",
    "title": "04、用户操作-修改",
    "version": "0.1.0",
    "group": "ADMIN_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>用户操作-修改</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>【必填】accessToken</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;update&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_uuid",
            "description": "<p>【必填】用户UUID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_account",
            "description": "<p>【必填】用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_name",
            "description": "<p>【必填】用户名称</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"更新用户成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "ADMIN_API",
    "name": "Get___postApiOperuserOperateUpdate"
  },
  {
    "type": "post",
    "url": "/api/changePassword",
    "title": "02、修改用户密码",
    "version": "0.1.0",
    "group": "ADMIN_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>修改用户密码</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>【必填】accessToken</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newpwd",
            "description": "<p>【必填】用户新密码</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"设置密码成功\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"error accessToken\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "ADMIN_API",
    "name": "PostApiChangepassword"
  },
  {
    "type": "get",
    "url": "/api/getAccessToken",
    "title": "01、获取accessToken",
    "name": "__accessToken",
    "version": "0.1.0",
    "group": "ADMIN_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取accesstoken</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": "<p>【必填】用户账号</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>【必填】用户密码需要md5加密,32位小写</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":{\"accessToken\":\"4c6ec1bb332d71ffde5e4f5d70a57f3c69ae29601812f46353e373d2100e7b82c8f72d360726ab7a7c857752b4941ed4f2cc3423c810f2c97936\"},\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"用户或密码错误\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "ADMIN_API"
  },
  {
    "type": "get",
    "url": "/api/getbaseconfig",
    "title": "03、获取基本配置信息",
    "version": "0.1.0",
    "group": "COMMON_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取基本配置信息</p>",
    "error": {
      "examples": [
        {
          "title": "示列返回",
          "content": "{\"EasyDarwin\":{\"Body\":{\"HTTPWanPort\":10088,\"RTMPWanPort\":10085,\"ServerWanIP\":\"127.0.0.1\"},\"Header\":{\"Copyright\":\"EasyDarwin\",\"Version\":\"EasyDarwin_C_v1.0\"}}}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "COMMON_API",
    "name": "GetApiGetbaseconfig"
  },
  {
    "type": "get",
    "url": "/api/getlivesessions",
    "title": "04、获取正在直播信息",
    "version": "0.1.0",
    "group": "COMMON_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取正在直播信息-列表或是单个详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>【可选】直播ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "host",
            "description": "<p>【可选】配置返回指定host的播放地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Application",
            "description": "<p>直播类型,分为 live 和 hls</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Bitrate",
            "description": "<p>码率</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Id",
            "description": "<p>唯一标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "NumOutputs",
            "description": "<p>在线人数</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Time",
            "description": "<p>直播时长</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Url",
            "description": "<p>直播地址</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "获取直播列表返回示例",
          "content": "{\"EasyDarwin\":{\"Body\":{\"SessionCount\":\"2\",\"Sessions\":{\"Sessions\":[{\"Application\":\"hls\",\"Bitrate\":\"50900\",\"HLS\":\"/hls/12/12_live.m3u8\",\"Id\":\"12\",\"NumOutputs\":\"0\",\"RTMP\":\"rtmp://192.168.1.67:10085/hls/12\",\"Time\":\"0h 4m 50s\"},{\"Application\":\"hls\",\"Bitrate\":\"0\",\"HLS\":\"/hls/22/22_live.m3u8\",\"Id\":\"22\",\"NumOutputs\":\"0\",\"RTMP\":\"rtmp://192.168.1.67:10085/hls/22\",\"Time\":\"0h 0m 4s\"}]}},\"Header\":{\"Copyright\":\"EasyDarwin\",\"Version\":\"EasyDarwin_C_v1.0\"}}}",
          "type": "json"
        },
        {
          "title": "单个查询返回示例-传入id=12",
          "content": "{\"EasyDarwin\":{\"Body\":{\"Application\":\"hls\",\"Bitrate\":\"45752\",\"HLS\":\"/hls/12/12_live.m3u8\",\"Id\":\"12\",\"NumOutputs\":\"0\",\"RTMP\":\"rtmp://192.168.1.67:10085/hls/12\",\"Time\":\"0h 5m 32s\"},\"Header\":{\"Copyright\":\"EasyDarwin\",\"Version\":\"EasyDarwin_C_v1.0\"}}}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "COMMON_API",
    "name": "GetApiGetlivesessions"
  },
  {
    "type": "get",
    "url": "/api/getserverinfo",
    "title": "02、获取服务器信息",
    "version": "0.1.0",
    "group": "COMMON_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取服务器信息</p>",
    "error": {
      "examples": [
        {
          "title": "示列返回",
          "content": "{\"EasyDarwin\":{\"Body\":{\"Hardware\":\"x86\",\"InterfaceVersion\":\"v1\",\"RunningTime\":\"0 Days 0 Hours 44 Mins 19 Secs\",\"Server\":\"EasyDSS v1.0\",\"Validity\":\"Validity Time Left: 50 day(s)\"},\"Header\":{\"Copyright\":\"EasyDarwin\",\"Version\":\"EasyDarwin_C_v1.0\"}}}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "COMMON_API",
    "name": "GetApiGetserverinfo"
  },
  {
    "type": "get",
    "url": "/api/query_devices",
    "title": "05、获取直播录像列表",
    "version": "0.1.0",
    "group": "COMMON_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取直播录像列表</p>",
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"success\",\"code\":0,\"data\":{\"devices\":[\"12\",\"13cef83ead2e4fa28e6dc84aaacfeb05\",\"22\",\"test\"]}}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "COMMON_API",
    "name": "GetApiQuery_devices"
  },
  {
    "type": "get",
    "url": "/api/query_record_daily",
    "title": "07、获取直播日录像详细",
    "version": "0.1.0",
    "group": "COMMON_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取直播日录像详细</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>【必填】直播ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>【必填】时间标记yyyyMMdd 如： 20170902</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"success\",\"code\":0,\"data\":{\"list\":[{\"start_time\":\"20170902132049\",\"hls\":\"/hls/12/20170902/20170902132049/12_record.m3u8\",\"duration\":726.238,\"snap\":\"\"},{\"start_time\":\"20170902133512\",\"hls\":\"/hls/12/20170902/20170902133512/12_record.m3u8\",\"duration\":802.778,\"snap\":\"\"},{\"start_time\":\"20170902152550\",\"hls\":\"/hls/12/20170902/20170902152550/12_record.m3u8\",\"duration\":56.033,\"snap\":\"\"},{\"start_time\":\"20170902152720\",\"hls\":\"/hls/12/20170902/20170902152720/12_record.m3u8\",\"duration\":118.804,\"snap\":\"\"},{\"start_time\":\"20170902152307\",\"hls\":\"/hls/12/20170902/20170902152307/12_record.m3u8\",\"duration\":122.173,\"snap\":\"\"},{\"start_time\":\"20170902153724\",\"hls\":\"/hls/12/20170902/20170902153724/12_record.m3u8\",\"duration\":25.491,\"snap\":\"\"},{\"start_time\":\"20170902140941\",\"hls\":\"/hls/12/20170902/20170902140941/12_record.m3u8\",\"duration\":573.536,\"snap\":\"\"},{\"start_time\":\"20170902133328\",\"hls\":\"/hls/12/20170902/20170902133328/12_record.m3u8\",\"duration\":71.251,\"snap\":\"\"},{\"start_time\":\"20170902135127\",\"hls\":\"/hls/12/20170902/20170902135127/12_record.m3u8\",\"duration\":931.613,\"snap\":\"\"},{\"start_time\":\"20170902153005\",\"hls\":\"/hls/12/20170902/20170902153005/12_record.m3u8\",\"duration\":38.778,\"snap\":\"\"},{\"start_time\":\"20170902153002\",\"hls\":\"/hls/12/20170902/20170902153002/12_record.m3u8\",\"duration\":0,\"snap\":\"\"},{\"start_time\":\"20170902140742\",\"hls\":\"/hls/12/20170902/20170902140742/12_record.m3u8\",\"duration\":75.389,\"snap\":\"\"},{\"start_time\":\"20170902125713\",\"hls\":\"/hls/12/20170902/20170902125713/12_record.m3u8\",\"duration\":1380.136,\"snap\":\"\"},{\"start_time\":\"20170902141950\",\"hls\":\"/hls/12/20170902/20170902141950/12_record.m3u8\",\"duration\":91.495,\"snap\":\"\"},{\"start_time\":\"20170902135054\",\"hls\":\"/hls/12/20170902/20170902135054/12_record.m3u8\",\"duration\":0.128,\"snap\":\"\"}]}}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "COMMON_API",
    "name": "GetApiQuery_record_daily"
  },
  {
    "type": "get",
    "url": "/api/query_record_monthly",
    "title": "06、获取直播月录像信息",
    "version": "0.1.0",
    "group": "COMMON_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取设备月录像信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>【必填】直播ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "period",
            "description": "<p>【必填】时间标记yyyyMM 如： 201709</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "flags",
            "description": "<p>返回的是当月的始终是31天,0表示没有录像，1表示有录像</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"success\",\"code\":0,\"data\":{\"flags\":\"0100000000000000000000000000000\"}}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "COMMON_API",
    "name": "GetApiQuery_record_monthly"
  },
  {
    "type": "get | post",
    "url": "/api/getDSSSeverURL",
    "title": "01、获得流媒体服务地址",
    "version": "0.1.0",
    "group": "COMMON_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获得流媒体服务地址</p>",
    "error": {
      "examples": [
        {
          "title": "返回示列",
          "content": "http://localhost:10088",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "COMMON_API",
    "name": "Get___postApiGetdssseverurl"
  },
  {
    "type": "get",
    "url": "/api/livecover/{live_uuid}.png",
    "title": "03、获取直播流封面接口",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取直播流封面接口,{live_uuid}替换成直播流ID</p>",
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "返回直播流封面",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "GetApiLivecoverLive_uuidPng"
  },
  {
    "type": "get | post",
    "url": "/api/getLiveShareCount",
    "title": "19、获取直播分享页面分享数目",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取直播分享页面分享数目</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_uuid",
            "description": "<p>【必填】直播ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":12,\"result\":1}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiGetlivesharecount"
  },
  {
    "type": "get | post",
    "url": "/api/getTotalDuration",
    "title": "18、获取直播录像总时长",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取直播录像总时长</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_url",
            "description": "<p>【必填】录像地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":{\"totalDuration\":\"418.67\"},\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"文件不存在！\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiGettotalduration"
  },
  {
    "type": "get | post",
    "url": "/api/getTsCover",
    "title": "01、直播获取视频回看截图地址",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>直播获取视频回看截图地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_uuid",
            "description": "<p>【必填】直播流ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "record_url",
            "description": "<p>【必填】录像地址如： <br/>/hls/219291f7357d49949cea4d6e85956dd4/20170628111214/219291f7357d49949cea4d6e85956dd4_record.m3u8</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "返回截图地址",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiGettscover"
  },
  {
    "type": "get | post",
    "url": "/api/live_detail",
    "title": "02、获取直播流详情",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取直播流详情</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>【必填】直播流ID</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":{\"live_uuid\":\"635d4840715e4d68aee1a119f0507d51\",\"live_name\":\"直播流名称\",\"time_start\":\"\",\"time_end\":\"\",\"live_type\":1,\"live_intro\":\"\",\"live_url\":\"635d4840715e4d68aee1a119f0507d51?sign=1b3999b6692f7ffdd85d490a22f3703369fe7b304c42f26e06eb7fd6465a2b8793fd2d365675a07177877756b19615ddf1ca&tm=20170811005222977\",\"live_share_id\":\"\",\"live_state\":1,\"state\":1,\"createtime\":\"2017-08-11 00:52:22\",\"altertime\":\"2017-08-30 01:33:51\"},\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiLive_detail"
  },
  {
    "type": "get | post",
    "url": "/api/operLive?operate=active",
    "title": "10、直播流操作-激活",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>直播流操作-激活</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;active&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>【必填】直播live_uuid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"激活直播成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperliveOperateActive"
  },
  {
    "type": "get | post",
    "url": "/api/operLive?operate=create",
    "title": "05、直播流操作-增加",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>直播流操作-增加</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;create&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_uuid",
            "description": "<p>【可选】直播ID，不传自动填写</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_name",
            "description": "<p>【必填】直播流名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_intro",
            "description": "<p>【可选】直播介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_start",
            "description": "<p>【可选】有效开始时间 yyyy-MM-dd hh:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_end",
            "description": "<p>【可选】有效结束时间 yyyy-MM-dd hh:mm:ss</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"创建直播成功!\",\"id\":\"3907ee5bf6474eddac2b8055204bdfc9\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperliveOperateCreate"
  },
  {
    "type": "get | post",
    "url": "/api/operLive?operate=delete",
    "title": "08、直播流操作-删除",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>直播流操作-删除</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;delete&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>【必填】直播live_uuid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"删除直播成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"删除失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperliveOperateDelete"
  },
  {
    "type": "get | post",
    "url": "/api/operLive?operate=disable",
    "title": "09、直播流操作-禁用",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>直播流操作-禁用</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;disable&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>【必填】直播live_uuid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"禁用直播成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperliveOperateDisable"
  },
  {
    "type": "get | post",
    "url": "/api/operLive?operate=retrieve",
    "title": "07、直播流操作-查询",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>直播流操作-查询</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;retrieve&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>【必填】当前页面</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rows",
            "description": "<p>【必填】每页行数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>总记录数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>记录详情列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"total\":7,\"rows\":[{\"live_uuid\":\"3907ee5bf6474eddac2b8055204bdfc9\",\"live_name\":\"testeseeeee\",\"time_start\":\"\",\"time_end\":\"\",\"live_type\":1,\"live_intro\":\"\",\"live_url\":\"3907ee5bf6474eddac2b8055204bdfc9?sign=1e339ce538727eaf895a485822f2226f69f82c631543f66252eb7e8415587d8f93fd2d365675a07376857757b19713d5fece&tm=20170830204234183\",\"live_share_id\":\"\",\"live_state\":1,\"state\":1,\"createtime\":\"2017-08-30 20:42:34\",\"altertime\":\"2017-08-30 20:42:34\"},{\"live_uuid\":\"635d4840715e4d68aee1a119f0507d51\",\"live_name\":\"sdf\",\"time_start\":\"\",\"time_end\":\"\",\"live_type\":1,\"live_intro\":\"\",\"live_url\":\"635d4840715e4d68aee1a119f0507d51?sign=1b3999b6692f7ffdd85d490a22f3703369fe7b304c42f26e06eb7fd6465a2b8793fd2d365675a07177877756b19615ddf1ca&tm=20170811005222977\",\"live_share_id\":\"\",\"live_state\":1,\"state\":1,\"createtime\":\"2017-08-11 00:52:22\",\"altertime\":\"2017-08-30 01:33:51\"},{\"live_uuid\":\"13cef83ead2e4fa28e6dc84aaacfeb05\",\"live_name\":\"test\",\"time_start\":\"\",\"time_end\":\"\",\"live_type\":1,\"live_intro\":\"\",\"live_url\":\"13cef83ead2e4fa28e6dc84aaacfeb05?sign=1c39cfb73b2f78a88e084e0a22f1273930fe28654e4bf73601ba2980145c2e8393fd2d365675a0717e857552b49716dc&tm=201708182217318\",\"live_share_id\":\"\",\"live_state\":1,\"state\":1,\"createtime\":\"2017-08-18 22:17:31\",\"altertime\":\"2017-08-18 22:17:31\"}],\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperliveOperateRetrieve"
  },
  {
    "type": "get | post",
    "url": "/api/operLive?operate=update",
    "title": "06、直播流操作-修改",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>直播流操作-修改</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;update&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_uuid",
            "description": "<p>【必填】直播ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_name",
            "description": "<p>【必填】直播流名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_intro",
            "description": "<p>【可选】直播介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_start",
            "description": "<p>【可选】有效开始时间 yyyy-MM-dd hh:mm:ss</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "time_end",
            "description": "<p>【可选】有效结束时间 yyyy-MM-dd hh:mm:ss</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"更新直播成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperliveOperateUpdate"
  },
  {
    "type": "get | post",
    "url": "/api/operLiveRetrieve",
    "title": "04、获取直播流列表",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取直播流列表</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>【必填】当前页面</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rows",
            "description": "<p>【必填】每页显示行数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>总记录数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>记录详情列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"total\":6,\"rows\":[{\"live_uuid\":\"635d4840715e4d68aee1a119f0507d51\",\"live_name\":\"sdf\",\"time_start\":\"\",\"time_end\":\"\",\"live_type\":1,\"live_intro\":\"\",\"live_url\":\"635d4840715e4d68aee1a119f0507d51?sign=1b3999b6692f7ffdd85d490a22f3703369fe7b304c42f26e06eb7fd6465a2b8793fd2d365675a07177877756b19615ddf1ca&tm=20170811005222977\",\"live_share_id\":\"\",\"live_state\":1,\"state\":1,\"createtime\":\"2017-08-11 00:52:22\",\"altertime\":\"2017-08-30 01:33:51\"},{\"live_uuid\":\"13cef83ead2e4fa28e6dc84aaacfeb05\",\"live_name\":\"test\",\"time_start\":\"\",\"time_end\":\"\",\"live_type\":1,\"live_intro\":\"\",\"live_url\":\"13cef83ead2e4fa28e6dc84aaacfeb05?sign=1c39cfb73b2f78a88e084e0a22f1273930fe28654e4bf73601ba2980145c2e8393fd2d365675a0717e857552b49716dc&tm=201708182217318\",\"live_share_id\":\"\",\"live_state\":1,\"state\":1,\"createtime\":\"2017-08-18 22:17:31\",\"altertime\":\"2017-08-18 22:17:31\"}],\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperliveretrieve"
  },
  {
    "type": "get | post",
    "url": "/api/operLiveVirtual?operate=active",
    "title": "16、虚拟直播操作-激活",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>虚拟直播操作-激活</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;active&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>【必填】虚拟直播live_uuid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"激活直播成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperlivevirtualOperateActive"
  },
  {
    "type": "get | post",
    "url": "/api/operLiveVirtual?operate=change",
    "title": "17、虚拟直播操作-切换源地址",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>虚拟直播操作-切换源地址</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;change&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_uuid",
            "description": "<p>【必填】虚拟直播live_uuid</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_path",
            "description": "<p>【必填】源地址live_path</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_path_type",
            "description": "<p>【可选】源地址类型1:点播文件UUID , 2:文件绝对路径 ,3:在线视频源</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_name",
            "description": "<p>【可选】虚拟直播名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_intro",
            "description": "<p>【可选】虚拟直播介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ts_time",
            "description": "<p>【可选】切片时长</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"切换源成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperlivevirtualOperateChange"
  },
  {
    "type": "get | post",
    "url": "/api/operLiveVirtual?operate=create",
    "title": "11、虚拟直播操作-增加",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>虚拟直播操作-增加</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;create&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_path",
            "description": "<p>【必填】源地址</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_path_type",
            "description": "<p>【可选】默认是文件绝对路径 1:点播文件UUID , 2:文件绝对路径 ,3:在线视频源</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_uuid",
            "description": "<p>【可选】直播ID，不传自动填写</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_name",
            "description": "<p>【可选】直播流名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_intro",
            "description": "<p>【可选】直播介绍</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "ts_time",
            "description": "<p>【可选】切片时长</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":{\"live_uuid\":\"f10539f0a03211e7a79839e2967b3701\",\"live_name\":\"\",\"live_intro\":\"\",\"live_path\":\"F:\\\\05CACHE\\\\demo\\\\1.mp4\",\"live_trans\":\"d:\\\\03CODE\\\\02Nodejs\\\\easydss_mp\\\\easydss\\\\www\\\\hls\\\\f10539f0a03211e7a79839e2967b3701_v\",\"ts_time\":10,\"live_pid\":29568,\"live_path_type\":2,\"m3u8\":\"http://localhost:10088/hls/f10539f0a03211e7a79839e2967b3701_v/playlist.m3u8\"},\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperlivevirtualOperateCreate"
  },
  {
    "type": "get | post",
    "url": "/api/operLiveVirtual?operate=delete",
    "title": "14、虚拟直播操作-删除",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>虚拟直播操作-删除</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;delete&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>【必填】虚拟直播live_uuid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"删除直播成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"删除失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperlivevirtualOperateDelete"
  },
  {
    "type": "get | post",
    "url": "/api/operLiveVirtual?operate=disable",
    "title": "15、虚拟直播操作-禁用停止",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>虚拟直播操作-禁用停止</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;disable&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>【必填】虚拟直播live_uuid</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"禁用直播成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperlivevirtualOperateDisable"
  },
  {
    "type": "get | post",
    "url": "/api/operLiveVirtual?operate=retrieve",
    "title": "13、虚拟直播操作-查询",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>直播流操作-查询</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;retrieve&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>【必填】当前页面</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rows",
            "description": "<p>【必填】每页行数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>总记录数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>记录详情列表</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"total\":2,\"rows\":[{\"live_uuid\":\"11\",\"live_name\":\"\",\"time_start\":\"\",\"time_end\":\"\",\"live_intro\":\"\",\"live_url\":\"\",\"live_state\":1,\"live_pid\":\"59592\",\"ts_time\":10,\"live_path\":\"23deea70a03211e7a835356d5bc475d1\",\"live_path_type\":1,\"live_trans\":\"d:\\\\03CODE\\\\02Nodejs\\\\easydss_mp\\\\easydss\\\\www\\\\hls\\\\11_v\",\"share_count\":0,\"state\":1,\"createtime\":\"2017-09-23 15:38:46\",\"altertime\":\"2017-09-23 15:38:46\",\"m3u8\":\"http://localhost:10088/hls/11_v/playlist.m3u8\"},{\"live_uuid\":\"04719870a02f11e793129917be0ee9c5\",\"live_name\":\"\",\"time_start\":\"\",\"time_end\":\"\",\"live_intro\":\"\",\"live_url\":\"\",\"live_state\":0,\"live_pid\":\"26772\",\"ts_time\":10,\"live_path\":\"F:\\\\05CACHE\\\\demo\\\\1.mp4\",\"live_path_type\":2,\"live_trans\":\"d:\\\\03CODE\\\\02Nodejs\\\\easydss_mp\\\\easydss\\\\www\\\\hls\\\\04719870a02f11e793129917be0ee9c5_v\",\"share_count\":0,\"state\":1,\"createtime\":\"2017-09-23 15:15:45\",\"altertime\":\"2017-09-23 15:15:45\",\"m3u8\":\"http://localhost:10088/hls/04719870a02f11e793129917be0ee9c5_v/playlist.m3u8\"}],\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperlivevirtualOperateRetrieve"
  },
  {
    "type": "get | post",
    "url": "/api/operLiveVirtual?operate=update",
    "title": "12、虚拟直播操作-修改",
    "version": "0.1.0",
    "group": "LIVE_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>虚拟直播操作-修改</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "operate",
            "description": "<p>【必填】固定值&quot;update&quot;</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_uuid",
            "description": "<p>【必填】直播ID</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_name",
            "description": "<p>【可选】直播流名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "live_intro",
            "description": "<p>【可选】直播介绍</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"更新直播成功!\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "LIVE_API",
    "name": "Get___postApiOperlivevirtualOperateUpdate"
  },
  {
    "type": "get",
    "url": "/api/play/{file_uuid}",
    "title": "2、点播视频分享播放页面",
    "version": "0.1.0",
    "group": "PUBLIC_PAGE",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>点播视频分享播放页面，{file_uuid}替换成视频UUID</p>",
    "filename": "easyums/admin/api.js",
    "groupTitle": "PUBLIC_PAGE",
    "name": "GetApiPlayFile_uuid"
  },
  {
    "type": "get",
    "url": "/api/video.html",
    "title": "1、点播视频列表页面",
    "version": "0.1.0",
    "group": "PUBLIC_PAGE",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>点播视频列表页面</p>",
    "filename": "easyums/admin/api.js",
    "groupTitle": "PUBLIC_PAGE",
    "name": "GetApiVideoHtml"
  },
  {
    "type": "get | post",
    "url": "/api/live_share/{live_uuid}",
    "title": "3、直播分享界面",
    "version": "0.1.0",
    "group": "PUBLIC_PAGE",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>直播分享界面,{live_uuid}替换成直播流UUID</p>",
    "filename": "easyums/admin/api.js",
    "groupTitle": "PUBLIC_PAGE",
    "name": "Get___postApiLive_shareLive_uuid"
  },
  {
    "type": "get | post",
    "url": "/api/live_share_v/{live_uuid}",
    "title": "4、虚拟直播分享界面",
    "version": "0.1.0",
    "group": "PUBLIC_PAGE",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>虚拟直播分享界面,{live_uuid}替换成直播流UUID</p>",
    "filename": "easyums/admin/api.js",
    "groupTitle": "PUBLIC_PAGE",
    "name": "Get___postApiLive_share_vLive_uuid"
  },
  {
    "type": "get",
    "url": "/api/sys_push",
    "title": "01、获取RTMP转发推流配置",
    "version": "0.1.0",
    "group": "SYSTEM_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>获取系统配置信息</p>",
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":{\"live\":[\"rtmp://localhost:1923/123\"],\"hls\":[\"rtmp://localhost:3232/test\"]},\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "SYSTEM_API",
    "name": "GetApiSys_push"
  },
  {
    "type": "post",
    "url": "/api/sys_push",
    "title": "02、编辑RTMP转发推流",
    "version": "0.1.0",
    "group": "SYSTEM_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>编辑RTMP转发推流</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "pushContent",
            "description": "<p>【必填】转推配置内容，如下: <br/>live][rtmp://127.0.0.1:10085/test&gt;&lt;hls][rtmp://127.0.0.1/test2&gt;&lt;hls][rtmp://127.0.0.1/test3 <br/>&gt;&lt;  分割一条转推 <br/>][  分割类型和转推地址</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"成功\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "SYSTEM_API",
    "name": "PostApiSys_push"
  },
  {
    "type": "get",
    "url": "/api/download/{file_uuid}",
    "title": "07、点播文件下载",
    "version": "0.1.0",
    "group": "VOD_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>点播文件下载 示例: http://localhost:10080/api/download/7f80ac41060843e7a7a79c30a4413021</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_uuid",
            "description": "<p>【必填】访问地址{file_uuid} 替换成file_uuid</p>"
          }
        ]
      }
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "VOD_API",
    "name": "GetApiDownloadFile_uuid"
  },
  {
    "type": "get | post",
    "url": "/api/setSnap",
    "title": "05、视频点播封面设置接口",
    "version": "0.1.0",
    "group": "VOD_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>视频点播封面设置接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_uuid",
            "description": "<p>【必填】唯一标志</p>"
          },
          {
            "group": "Parameter",
            "type": "Float",
            "optional": false,
            "field": "currentTime",
            "description": "<p>【必填】设置为封面所在时间，可以精确到小数点后4位</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"设置成功\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "VOD_API",
    "name": "Get___postApiSetsnap"
  },
  {
    "type": "get | post",
    "url": "/api/videodelete",
    "title": "03、视频删除接口",
    "version": "0.1.0",
    "group": "VOD_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>视频删除接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_uuid",
            "description": "<p>【必填】唯一标志，查询唯一指定视频信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>【必填】系统配置的密钥</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"删除成功\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"删除失败，指定的视频信息不存在！\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "VOD_API",
    "name": "Get___postApiVideodelete"
  },
  {
    "type": "get | post",
    "url": "/api/videoedit",
    "title": "04、视频点播信息编辑接口",
    "version": "0.1.0",
    "group": "VOD_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>视频点播信息编辑接口</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_uuid",
            "description": "<p>【必填】唯一标志，查询唯一指定视频信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "api_key",
            "description": "<p>【必填】系统配置的密钥</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_name",
            "description": "<p>【可选】视频名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_path",
            "description": "<p>【可选】视频路径</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>结果描述</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":\"删除成功\",\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"删除失败，指定的视频信息不存在！\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "VOD_API",
    "name": "Get___postApiVideoedit"
  },
  {
    "type": "get | post",
    "url": "/api/videoinfo",
    "title": "02、视频信息详情接口",
    "version": "0.1.0",
    "group": "VOD_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>视频信息详情接口,file_uuid 如果传入此格式：xxxxxxxx.mp4 ,表示该视频是用户自主上传到该目录，会进行通知转码并返回视频状态信息</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_uuid",
            "description": "<p>【必填】唯一标志，查询唯一指定视频信息</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "msg",
            "description": "<p>记录详情信息</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.file_uuid",
            "description": "<p>唯一标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.file_name",
            "description": "<p>视频名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.file_path",
            "description": "<p>文件实际存储路径</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.file_type",
            "description": "<p>文件类型</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.trans_path",
            "description": "<p>切片保存目录</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.file_size",
            "description": "<p>文件大小(单位：b)</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "rows.trans_state",
            "description": "<p>转码状态： 0:转码中 1:尚未开始 2:转码成功 -1:发生错误</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.state",
            "description": "<p>数据状态 1：正常 -1:已删除</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"msg\":{\"file_uuid\":\"c94f8ceb59314c3c96f71cb5354056ea\",\"file_name\":\"3453544\",\"file_path\":\"D:\\\\Upload\\\\c94f8ceb59314c3c96f71cb5354056ea.mp4\",\"file_type\":\"video/mp4\",\"file_size\":10980936,\"file_extend\":\"mp4\",\"trans_path\":\"D:\\\\Marvin\\\\EasyDSS_V1.1.170731\\\\easydss\\\\www\\\\EasyTrans\\\\Data\\\\c94f8ceb59314c3c96f71cb5354056ea\",\"trans_log\":\"\",\"trans_state\":2,\"state\":1,\"order_id\":0,\"createtime\":\"2017-08-22 18:09:58\",\"altertime\":\"2017-08-22 18:09:58\"},\"result\":1}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "VOD_API",
    "name": "Get___postApiVideoinfo"
  },
  {
    "type": "get | post",
    "url": "/api/videolist",
    "title": "01、视频点播列表接口",
    "version": "0.1.0",
    "group": "VOD_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>视频点播列表接口，获取视频的点播列表.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>【必填】当前页面</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "rows",
            "description": "<p>【必填】每页显示行数</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_uuid",
            "description": "<p>【可选】唯一标志，查询唯一指定视频信息</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "file_name",
            "description": "<p>【可选】视频名称，可以模糊匹配一个或多个</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "result",
            "description": "<p>1：表示成功, 0:表示失败</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>总记录数</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rows",
            "description": "<p>记录详情列表</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.file_uuid",
            "description": "<p>唯一标志</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.file_name",
            "description": "<p>视频名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.url_m3u8",
            "description": "<p>m3u8播放地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "rows.url_snap",
            "description": "<p>封面图片地址</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"total\":22,\"rows\":[{\"file_uuid\":\"c94f8ceb59314c3c96f71cb5354056ea\",\"file_name\":\"3453544\",\"url_m3u8\":\"http://121.40.50.44:10088/EasyTrans/Data/c94f8ceb59314c3c96f71cb5354056ea/video.m3u8\",\"url_snap\":\"http://121.40.50.44:10088/EasyTrans/Data/c94f8ceb59314c3c96f71cb5354056ea/snap.png\"}]}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "失败返回示例",
          "content": "{\"msg\":\"失败\",\"result\":0}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "VOD_API",
    "name": "Get___postApiVideolist"
  },
  {
    "type": "post",
    "url": "/api/upload",
    "title": "06、点播文件上传",
    "version": "0.1.0",
    "group": "VOD_API",
    "permission": [
      {
        "name": "ALL"
      }
    ],
    "description": "<p>点播文件上传 form-data; name=&quot;files[]&quot;;</p>",
    "success": {
      "examples": [
        {
          "title": "成功返回示例",
          "content": "{\"files\":[{\"name\":\"9cbd50f2ada444abb1387b0ed79e3d75.avi\",\"originalName\":\"1034_03_006_jet_li.avi\",\"size\":271290,\"type\":\"video/avi\"}]}",
          "type": "json"
        }
      ]
    },
    "filename": "easyums/admin/api.js",
    "groupTitle": "VOD_API",
    "name": "PostApiUpload"
  }
] });
