function alertInfo(){$.messager.alert("提示","请选择一条数据进行操作！","info")}function showSuccess(a){$.messager.show({title:"提示",msg:"<font style='color:green'>"+a+"</font>"})}function showError(a){$.messager.show({title:"错误",msg:"<font style='color:red'>"+a+"</font>"})}function showWarning(a){$.messager.show({title:"警告",msg:"<font style='color:yellow'>"+a+"</font>"})}var Common={StringDateFormatter:function(a){return a=a.replace(/T0/," "),a=a.replace(/.000Z/,"")}},CURD={url:"",id:"",initDataFunction:void 0,initData:function(){void 0!=CURD.initDataFunction&&CURD.initDataFunction()},showAddData:function(){$("#dlg").dialog("open").dialog("center").dialog("setTitle","添加数据"),$("#fm").form("clear"),CURD.initData(),$("#operate").val("create")},showEditData:function(a){-1==a&&(a=$("#dg").datagrid("getSelected")),-1!=a&&a?($("#dlg").dialog("open").dialog("center").dialog("setTitle","编辑数据"),$("#operate").val("update"),CURD.initData(),$("#fm").form("load",a)):alertInfo()},saveData:function(){$("#fm").form("submit",{url:CURD.url,onSubmit:function(){return $(this).form("validate")},success:function(a){var a=JSON.parse(a);1==a.result?(showSuccess(a.msg),$("#dlg").dialog("close"),$("#dg").datagrid("reload")):showError(a.msg)}})},deleteData:function(){var a=$("#dg").datagrid("getSelected");a?$.messager.confirm("确定","您确定删除该条数据吗?",function(b){b&&$.post(CURD.url,{id:a[CURD.id],operate:"delete"},function(a){1==a.result?(showSuccess(a.msg),$("#dg").datagrid("reload")):showError(a.msg)},"json")}):alertInfo()}};