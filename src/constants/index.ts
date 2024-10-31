export const JWT_EXCEPTION_STATUS = {
    TokenInvalid: "TokenInvalid",
    TokenExpired: "TokenExpired",
    TokenRequired: "TokenRequired"
}

export const REGEX = {
    EMAIL: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    PHONE: /((09|03|07|08|05)+([0-9]{8})\b)/g,
}

export const DATE_FORMAT = {
    DATETIME_FORMAT: "yyyy/MM/dd HH:mm:ss",
    DATETIME_FORMAT_DMYHM: "dd-MM-yyyy HH:mm",
    DATETIME_FORMAT_DMYHMS: "dd/MM/yyyy HH:mm:ss",
    DATETIME_FORMAT_DMYHHMM: "dd/MM/yyyy HH:mm",
    DATETIME_FORMAT_YMDHMS: "yyyy-MM-dd HH:mm:ss",
    DATETIME_FORMAT_YMDHM: "yyyy-MM-dd HH:mm",
    DATE_FORMAT_YMD: "yyyy-MM-dd",
    DATE_FORMAT_DMY: "dd-MM-yyyy",
    DATE_FORMAT_DMY_02: "dd/MM/yyyy",
    DATE_FORMAT_YM_01: "yyyyMM",
    HOUR_FORMAT: "HH:mm",
}

export const PUNCTUATION = {
    COMMA: ",",
    DOT: ".",
    COLON: ":",
    SEMICOLON: ";",
    HYPHEN: "-",
    UNDERSCORE: "_",
    SLASH: "/",
    BACKSLASH: "\\",
    PIPE: "|",
    PLUS: "+",
    MINUS: "-",
    ASTERISK: "*",
    TILDE: "~",
    EXCLAMATION: "!",
    AT: "@",
    HASH: "#",
    DOLLAR: "$",
    PERCENT: "%",
    CARET: "^",
    AMPERSAND: "&",
    AND: "and",
    LEFT_PARENTHESIS: "(",
    RIGHT_PARENTHESIS: ")",
    LEFT_BRACKET: "[",
    RIGHT_BRACKET: "]",
    LEFT_BRACE: "{",
    RIGHT_BRACE: "}",
    EQUAL: "=",
    QUOTE: "'",
    DOUBLE_QUOTE: "\"",
    QUESTION: "?",
    LESS_THAN: "<",
    GREATER_THAN: ">",
    GRAVE_ACCENT: "`",
    NEW_LINE: "\n",
    CARRIAGE_RETURN: "\r",
    TAB: "\t",
    SPACE: " ",
}

export const API_STATUS = {
    SUCCESS: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404
}