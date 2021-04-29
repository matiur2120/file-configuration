export const data = {
  "alpha":{
    "interval": 30,
    "thing1": true,
    "thing2": true,
    "thing3": true,
    "thing4": true,
    "run_once_only": false,
  },
  "bravo": {
    "host": "1.1.1.1",
    "ssl_port": 8443,
    "ssl_verify": true,
    "username": "apiuser",
    "password": "apipassword",
    "max_active": 1,
    "max_active_thing1": 1,
    "max_active_thing2": 1,
    "max_active_thing3": 1,
    "max_active_thing4": 1,
    "max_active_all": 32,
    "flags": 'flag1'
  },
  "charlie": {
    "log_dir": "/path/to/logs",
    "script_log_dir": "scripts",
    "logconsole": 1,
    "apilogfilter": [
      "^/dvmdb/device$",
      "^/dvmdb/adom$",
      "^/sys/log(in|out)",
      "/dvmdb/adom/\\w+/device/\\w+",
      "/pm/config/adom/root/_fsp/managed-switch/platforms"
    ]
  },
  "template": {
    "base_dir": "/path/to/templates"
  },
  "thing1": {
    "timeout": 1800,
    "firmware": {
      "upgrade": 'enable',
      "file": "myfile.csv",
      "console_msg": "New Firmware now being uploaded",
      "method": "ftp",
      "firmware": "1.1.1",
      "build": 1234,
      "upgrade_task_updates": 'disable',
    },
    "skip_retrieve": 'enable',
    "script_delete": 'success',
    "ok_to_fail": [
      "thisfile.rt"
    ],
    "promote": {
      "pre_script": "<scriptname>"
    },
    "promote_rollback": {
      "pre_script": "<scriptname>"
    },
    "rename": {
      "pre_script": "<scriptname>"
    }
  },
  "thing2": {
    "timeout": 1800,
    "firmware": {
      "upgrade": 'enable',
      "file": "myfile.csv",
      "console_msg": "New Firmware now being uploaded",
      "method": "ftp",
      "firmware": "1.1.1",
      "build": 1234,
      "upgrade_task_updates": 'enable',
    },
    "skip_retrieve": 'enable',
    "script_delete": 'success',
    "ok_to_fail": [
      "thisfile.rt"
    ],
    "promote": {
      "pre_script": "<scriptname>"
    },
    "promote_rollback": {
      "pre_script": "<scriptname>"
    },
    "rename": {
      "pre_script": "<scriptname>"
    }
  },
  "thing3": {
    "timeout": 1800,
    "firmware": {
      "upgrade": 'enable',
      "file": "myfile.csv",
      "console_msg": "New Firmware now being uploaded",
      "method": "ftp",
      "firmware": "1.1.1",
      "build": 1234,
      "upgrade_task_updates": 'enable',
    },
    "skip_retrieve": 'enable',
    "script_delete": 'success',
    "ok_to_fail": [
      "thisfile.rt"
    ],
    "promote": {
      "pre_script": "<scriptname>"
    },
    "promote_rollback": {
      "pre_script": "<scriptname>"
    },
    "rename": {
      "pre_script": "<scriptname>"
    }
  },
  "thing4": {
    "timeout": 1800,
    "firmware": {
      "upgrade": 'enable',
      "file": "myfile.csv",
      "console_msg": "New Firmware now being uploaded",
      "method": "ftp",
      "firmware": "1.1.1",
      "build": 1234,
      "upgrade_task_updates": 'enable',
    },
    "skip_retrieve": 'enable',
    "script_delete": 'success',
    "ok_to_fail": [
      "thisfile.rt"
    ],
    "promote": {
      "pre_script": "<scriptname>"
    },
    "promote_rollback": {
      "pre_script": "<scriptname>"
    },
    "rename": {
      "pre_script": "<scriptname>"
    }
  },
  "thing1db": {
    "src": "/ztp/fp.csv",
    "key": "sn"
  },
  "thing2db": {
    "src": "/ztp/fp.csv",
    "key": "sn"
  },
  "thing3db": {
    "src": "/ztp/fp.csv",
    "key": "sn"
  },
  "thing4db": {
    "src": "/ztp/fp.csv",
    "key": "sn"
  },
  "support": {
    "status": true,
    "dryrun": false,
    "token": "PUT-YOUR-TOKEN-HERE",
    "baseurl": "https://someother.place.example.com",
    "outdir": "/some/other/path"
  }
}