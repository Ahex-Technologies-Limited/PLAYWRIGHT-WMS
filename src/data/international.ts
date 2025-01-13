export enum TITLES {
  CHECKOUT_PAGE = 'Culmina tu registro para obtener la Glam Bag cada mes | IPSY',
  COMMUNITY_RULES_PAGE = 'Conoce nuestros Lineamientos de Comunidad | IPSY',
  COPYRIGHT_PAGE = 'Conoce nuestros Derechos de Autor y Propiedad Intelectual | IPSY',
  FACEBOOK_PAGE = 'IPSY.Mex - Inicio | Facebook',
  GLAMBAG_PAGE = 'Checa todos los detalles de tu suscripción | IPSY',
  HELP_CENTER_PAGE = 'IPSY Mexico Centro de Ayuda',
  HOME_PAGE = 'Belleza a tu medida, todos los meses. | IPSY',
  INSTAGRAM_PAGE = 'IPSY México (@ipsy.mex) • Fotos y videos de Instagram',
  LOGIN_PAGE = 'Entra a tu cuenta de IPSY | IPSY',
  MY_ACCOUNT_PAGE = 'Conoce todos los detalles de tu suscripción | IPSY',
  ORDERS_PAGE = 'Checa el historial de tus compras | IPSY',
  PRIVACY_PAGE = 'Conoce nuestro Aviso de Privacidad | IPSY',
  QUIZ_PAGE = 'Responde el Quiz de Belleza | IPSY',
  TERMS_AND_CONDITIONS_PAGE = 'Conoce nuestros Términos y Condiciones | IPSY',
  TIKTOK_PAGE = 'TikTok de IPSY México (@ipsy.mex) | Mira los últimos videos de IPSY México en TikTok',
}

export enum PATHS {
  ADD_ADDRESS_PAGE = '/account/address/add',
  CHOOSE_SUBSCRIPTION_PAGE = '/subscribe/choose',
  COMMUNITY_RULES_PAGE = '/community',
  COPYRIGHT_PAGE = '/copyright',
  GLAMBAG_PAGE = '/glambag',
  HOME_PAGE = '/',
  LOGIN_PAGE = '/login',
  MANAGE_SUBSCRIPTION_PAGE = '/account/manageSubscription',
  MY_ACCOUNT_PAGE = '/account/mysubscription',
  ORDERS_PAGE = '/account/orders',
  PRIVACY_PAGE = '/privacy',
  PRODUCT_BASE_PAGE = '/product',
  QUIZ_PAGE = '/quiz/take/questions',
  TERMS_AND_CONDITIONS_PAGE = '/terms',
}

export enum URLS {
  FACEBOOK_PAGE = 'https://www.facebook.com/ipsy.mex',
  HELP_CENTER_PAGE = 'https://help.ipsy.com/hc/es',
  INSTAGRAM_PAGE = 'https://www.instagram.com/ipsy.mex',
  TIKTOK_PAGE = 'https://www.tiktok.com/@ipsy.mex',
}

export enum PROD_CREDENTIALS {
  PASSWORD = 'ipsytest',
  USERNAME = 'alexa+ipsymxprod13@ipsy.com',
}

export enum PROD_CREDENTIALS_NEVER_USER {
  PASSWORD = 'ipsytest',
  USERNAME = 'never-user-test-00@ipsy.com',
}

export enum STAGE_CREDENTIALS {
  PASSWORD = 'Test1234!',
  USERNAME = 'auto7391697637945570688@ipsy-wdio.com',
}

export enum STAGE_CREDENTIALS_NEVER_USER {
  PASSWORD = 'ipsytest',
  USERNAME = 'alexa+ipsymxstage12@ipsy.com',
}

export enum PRODUCT_IDS {
  PROD_PRODUCT_ID = 'p-jkyawjby1b8hewn',
  STAGE_PRODUCT_ID = 'p-kmcnfe49yg8z7on',
}

export enum LINK_REGEX {
  TEMPORARY_PASSWORD = '(?<=Contraseña provisional: ).*',
}

export enum EMAIL_DATA {
  EMAIL_FROM = 'ipsy@email.ipsy.com',
  EMAIL_TITLE = 'Recupera tu contraseña de IPSY',
  EMAIL_TO = 'stagingipsy@gmail.com',
}

export enum PROD_CREDENTIALS_GB {
  PASSWORD = 'Test1234!',
  USERNAME = 'bfaqa+mx-addons@ipsy.com',
}

export enum PROD_CREDENTIALS_1P_REGRESSION {
  PASSWORD = 'Test1234!',
  USERNAME = 'bfaqa+mx-1p@ipsy.com',
}

export enum SORT_BY_TITLES {
  A_TO_Z_BRAND = 'Marcas A-Z',
  HIGH_TO_LOW_PERCENTAGE = '% Off Más a Menos',
  HIGH_TO_LOW_PRICE = 'Precio Alto a Bajo',
  LOW_TO_HIGH_PERCENTAGE = '% Off Menos a Más',
  LOW_TO_HIGH_PRICE = 'Precio Bajo a Alto',
  SORT_BY = 'Ordenar Por',
  Z_TO_A_BRAND = 'Marcas Z-A',
}

export const prodShippingInfoRegression1P = {
  ADDRESS: 'Emiliano zapata 24 int. B',
  CITY: 'San Pedro Tlaquepaque',
  COUNTRY: 'MX',
  STATE: 'JAL',
  ZIP: '45500',
};

export const stageShippingInfoRegression1P = {
  ADDRESS: '123 st 33 av',
  CITY: 'Ciudad de Mexico',
  COUNTRY: 'MX',
  STATE: 'QUE',
  ZIP: '08100',
};

export const prodCreditCardRegression1P = {
  LAST_DIGITS: '5411',
  MONTH: '7',
  YEAR: '2028',
};

export const stageCreditCardRegression1P = {
  LAST_DIGITS: '8001',
  MONTH: '8',
  YEAR: '2026',
};
