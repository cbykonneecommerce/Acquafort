<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress_db' );

/** MySQL database username */
define( 'DB_USER', 'wp_user' );

/** MySQL database password */
define( 'DB_PASSWORD', '8)W(VzFU1sRp' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'jTNwv51v35PCL,oyQ4j JWVC+MHU?Jw)1ob/S@Nl^WX$#45[<ssCE,JvwCb[UVw?' );
define( 'SECURE_AUTH_KEY',  'W;<]Fm,4dJvvQ.fw})|^Q*HL@lidg<o0PM7IE%iSGs|f5T243}5W-]W+yoLEr?L7' );
define( 'LOGGED_IN_KEY',    'Y`A7Vt=PeXaH1=7Ab>r;Is2Ii1#=1__tu?laHs-z^nRe58SCx#$D@N;K/h^CccRi' );
define( 'NONCE_KEY',        '!(j?>m:$BLnV]nX)<2=6j/b+@AO(n=*/W]-[,n gLAQF7%)OU2sqE/2^engiP4Av' );
define( 'AUTH_SALT',        'ZW#7(/HNZl%6:qjW>?BfO`N3x>wWG6Ko@W:lI4cc^:>mRmnS7,J_ ^?7H1e><zdF' );
define( 'SECURE_AUTH_SALT', 'Mr~R_<wuBx4ZTb&n!XH Bo`FZ1<Q^n4{@]f5$sT5va.$}N|UZ%+NM|<XzkW;2vpA' );
define( 'LOGGED_IN_SALT',   '&7I$::PZ`,kPJ7;BBu;*phXm_yfRf9`vGCAVbnoZx(?J(&Z7S~^9:2Y:C@9|unL4' );
define( 'NONCE_SALT',       '94eZi(<:w ,^aE{O&:q!AA*^ID.H!44;1WR4%g3Wb!J(+,Z$}N]P6MOqWdyc4g*4' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
