export enum Actions {
    SET_OWN_NAME = 'SET_OWN_NAME',
    SET_OWN_ROLE = 'SET_OWN_ROLE',
    SET_LANGUAGE = 'SET_LANGUAGE',
    SET_ICON_STYLE = 'SET_ICON_STYLE',
    SHOW_NAME_MODAL = 'SHOW_NAME_MODAL',
    SHOW_ROLE_MODAL = 'SHOW_ROLE_MODAL',
    SET_EDITOR_PRESET = 'SET_EDITOR_PRESET',
    SET_EDITOR_TURN = 'SET_EDITOR_TURN',
    SET_EDITOR_NAME = 'SET_EDITOR_NAME',
    SET_EDITOR_CIVILISATIONS = 'SET_EDITOR_CIVILISATIONS',
}

export enum ServerActions {
    APPLY_CONFIG = 'APPLY_CONFIG',
    SET_PLAYER_CONNECTED = 'SET_PLAYER_CONNECTED',
    SET_PLAYER_NAME = 'SET_PLAYER_NAME',
    SET_READY = 'SET_READY',
    EXECUTE_ACTION = 'EXECUTE_ACTION',
    SET_EVENTS = 'SET_EVENTS',
    SET_COUNTDOWN_VALUE = 'SET_COUNTDOWN_VALUE',
    APPLY_REPLAY = 'APPLY_REPLAY',

}

export enum ClientActions {
    CONNECT_TO_SERVER = 'CONNECT_TO_SERVER',
    SEND_SET_ROLE = 'SEND_SET_ROLE',
    SEND_SET_NAME = 'SEND_SET_NAME',
    SEND_READY = 'SEND_READY',
    SEND_CLICK_PANEL = 'SEND_CLICK_PANEL',
    DISCONNECT_FROM_SERVER = 'DISCONNECT_FROM_SERVER',
}
