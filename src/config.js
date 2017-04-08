const appConfig = require('application-config')('MilitaryMonitoring')
const path = require('path')

const APP_NAME = 'Military Monitoring'
const APP_TEAM = 'VNC-CHDK-UI'
const APP_VERSION = require('../package.json').version

module.exports = {
    APP_COPYRIGHT: 'Copyright © 2014-2017 ' + APP_TEAM,
    APP_FILE_ICON: path.join(__dirname, '..', 'static', 'WebTorrentFile'),
    APP_ICON: path.join(__dirname, '..', 'static', 'WebTorrent'),
    APP_NAME: APP_NAME,
    APP_TEAM: APP_TEAM,
    APP_VERSION: APP_VERSION,
    APP_WINDOW_TITLE: APP_NAME + ' (BETA)',

    CONFIG_PATH: getConfigPath(),

    WINDOW_MAIN: 'file://' + path.join(__dirname, '..', 'static', 'main.html'),
    WINDOW_DETAIL: 'file://' + path.join(__dirname, '..', 'static', 'detail.html'),

    WINDOW_WIDTH: 1200,
    WINDOW_HEIGHT: 900,
    WINDOW_DETAIL_WIDTH: 900,
    WINDOW_DETAIL_HEIGHT: 600,

    CHART_WIDTH: 1000,
    CHART_HEIGHT: 600,
}

function getConfigPath () {
    return path.dirname(appConfig.filePath)
}
