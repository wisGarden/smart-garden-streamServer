  @echo off
  CLS
  ECHO.
  ECHO =============================
  ECHO Running Admin shell
  ECHO =============================

  :init
  setlocal DisableDelayedExpansion
  set cmdInvoke=1
  set winSysFolder=System32
  set "batchPath=%~0"
  for %%k in (%0) do set batchName=%%~nk
  set "vbsGetPrivileges=%temp%\OEgetPriv_%batchName%.vbs"
  setlocal EnableDelayedExpansion

  :checkPrivileges
    NET FILE 1>NUL 2>NUL
    if '%errorlevel%' == '0' ( goto gotPrivileges ) else ( goto getPrivileges )

  :getPrivileges
    if '%1'=='ELEV' (echo ELEV & shift /1 & goto gotPrivileges)
    ECHO.
    ECHO **************************************
    ECHO Invoking UAC for Privilege Escalation
    ECHO **************************************

    ECHO Set UAC = CreateObject^("Shell.Application"^) > "%vbsGetPrivileges%"
    ECHO args = "ELEV " >> "%vbsGetPrivileges%"
    ECHO For Each strArg in WScript.Arguments >> "%vbsGetPrivileges%"
    ECHO args = args ^& strArg ^& " "  >> "%vbsGetPrivileges%"
    ECHO Next >> "%vbsGetPrivileges%"

    if '%cmdInvoke%'=='1' goto InvokeCmd 

    ECHO UAC.ShellExecute "!batchPath!", args, "", "runas", 1 >> "%vbsGetPrivileges%"
    goto ExecElevation

  :InvokeCmd
    ECHO args = "/c """ + "!batchPath!" + """ " + args >> "%vbsGetPrivileges%"
    ECHO UAC.ShellExecute "%SystemRoot%\%winSysFolder%\cmd.exe", args, "", "runas", 1 >> "%vbsGetPrivileges%"

  :ExecElevation
  "%SystemRoot%\%winSysFolder%\WScript.exe" "%vbsGetPrivileges%" %*
  exit /B

  :gotPrivileges
  setlocal & cd /d %~dp0
  if '%1'=='ELEV' (del "%vbsGetPrivileges%" 1>nul 2>nul  &  shift /1)

  ECHO ****************put here code as you like**********************

  @set dir=%~dp0
  @echo %dir%
  @call powershell -Command "(gc %dir%EasyDSS-service.xml) -replace '<logpath>.*</logpath>', '<logpath>%dir%logs</logpath>' | Out-File %dir%EasyDSS-service.xml"
  @call powershell -Command "(gc %dir%EasyDSS-service.xml) -replace '<executable>.*</executable>', '<executable>%dir%EasyDSS.exe</executable>' | Out-File %dir%EasyDSS-service.xml"
  @call powershell -Command "(gc %dir%EasyDSS-service.xml) -replace '<startarguments>.*</startarguments>', '<startarguments>-p %dir%</startarguments>' | Out-File %dir%EasyDSS-service.xml"
  @call powershell -Command "(gc %dir%EasyDSS-service.xml) -replace '<stopexecutable>.*</stopexecutable>', '<stopexecutable>%dir%EasyDSS.exe</stopexecutable>' | Out-File %dir%EasyDSS-service.xml"
  @call powershell -Command "(gc %dir%EasyDSS-service.xml) -replace '<stoparguments>.*</stoparguments>', '<stoparguments>-p %dir% -s stop</stoparguments>' | Out-File %dir%EasyDSS-service.xml"

  %dir%EasyDSS-service.exe install
  net start EasyDSS_Solution
  pause