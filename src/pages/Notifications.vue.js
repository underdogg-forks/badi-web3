// import * as shared from '../scripts/shared'
// import * as storage from '../scripts/storage'
import * as notify from '../scripts/notification'

export default {
  name: 'Notifications',
  created() {},
  data() {
    return {
      title: 'Notifications',
      icon: 'message',
      remotePushSupported: true,
      permission: 'default', // not answered
      tags: '',
      userId: '',
      sunOffset: 30,
      sunType: 'sunset',
      customWhen: '13:00',
      whens: [],
      offsets: [{
          min: 0,
          desc: "30 minutes before"
        },
        {
          min: 15,
          desc: "15 minutes before"
        },
        {
          min: 20,
          desc: "10 minutes before"
        },
        {
          min: 25,
          desc: "5 minutes before"
        },
        {
          min: 26,
          desc: "4 minutes before"
        },
        {
          min: 27,
          desc: "3 minutes before"
        },
        {
          min: 28,
          desc: "2 minutes before"
        },
        {
          min: 29,
          desc: "1 minute before"
        },
        {
          min: 30,
          desc: "At"
        },
        {
          min: 31,
          desc: "1 minute after"
        },
        {
          min: 32,
          desc: "2 minutes after"
        },
        {
          min: 33,
          desc: "3 minutes after"
        },
        {
          min: 34,
          desc: "4 minutes after"
        },
        {
          min: 35,
          desc: "5 minutes after"
        },
        {
          min: 40,
          desc: "10 minutes after"
        },
        {
          min: 45,
          desc: "15 minutes after"
        },
        {
          min: 60,
          desc: "30 minutes after"
        }
      ]
    }
  },
  mounted() {
    // var host = document.getElementById('images');
    // notify.makeImage(host, 1);
    // notify.makeImage(host, 2);
    this.startUpOneSignal();
  },
  methods: {
    testNotification() {
      notify.showNow();
    },
    getOffsetDesc: function (min) {
      var offset = this.offsets.filter(function (off) {
        return off.min === min
      });
      if (offset.length !== 1) {
        return '?'
      }
      return offset[0].desc;
    },
    addSunTime() {
      var when = {
        type: this.sunType,
        offset: this.sunOffset
      };
      this.addWhen(when);
    },
    addCustomTime() {
      if (!this.customWhen) {
        return;
      }
      var when = {
        type: 'custom',
        time: this.customWhen,
      };
      this.addWhen(when);
    },
    addWhen(when) {
      console.log('add', when)
      if (!when) {
        return;
      }

      // check for duplicates
      for (var i = 0; i < this.whens.length; i++) {
        var test = this.whens[i];
        if (test.type !== when.type) {
          continue;
        }
        switch (test.type) {
          case 'custom':
            if (test.time === when.time) {
              return; // duplicate
            }
            break;
          default:
            if (test.offset === when.offset) {
              return // duplicate
            }
            break;
        }
      }

      this.whens.push(when);
      this.whens.sort(function (a, b) {
        return a > b ? 1 : -1;
      });
      this.saveAllWhens();
    },
    saveAllWhens() {
      var vue = this;
      if (!this.userId) {
        console.log('no userid... cannot save');
        return;
      }

      OneSignal.sendTag("whens", JSON.stringify(this.whens));
    },
    startUpOneSignal() {
      var vue = this;

      OneSignal.push(function () {
        OneSignal.getTags(function (tags) {
          console.log('tags', tags);
          vue.tags = tags;
          if (tags && tags.when) {
            console.log('got tags');
            vue.applyWhens(tags.when);
          }
        });
        OneSignal.getUserId(function (userId, a, b) {
          console.log(userId, a, b)
          vue.userId = userId;
          vue.showStep(2, userId != null);
          console.log(userId); // leave in console, for help desk support
        });
      });
      OneSignal.push(function () {
        /* These examples are all valid */
        var isPushSupported = OneSignal.isPushNotificationsSupported();
        if (isPushSupported) {
          vue.remotePushSupported = true
        } else {
          vue.remotePushSupported = false
        }
      });
      OneSignal.push(["getNotificationPermission", function (permission) {
        vue.permission = permission;
      }]);
    },
    askForPush() {
        OneSignal.push(function () {
          OneSignal.registerForPushNotifications({
            modalPrompt: false
          });
        });
    },
    showStep(n, known) {

    },
    applyWhens(when) {

    }
  }
}
