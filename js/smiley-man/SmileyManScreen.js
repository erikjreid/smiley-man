// Copyright 2020, University of Colorado Boulder

/**
 * @author Erik Reid
 */
define( require => {
  'use strict';

  // modules
  const Property = require( 'AXON/Property' );
  const Screen = require( 'JOIST/Screen' );
  const smileyMan = require( 'SMILEY_MAN/smileyMan' );
  const SmileyManModel = require( 'SMILEY_MAN/smiley-man/model/SmileyManModel' );
  const SmileyManScreenView = require( 'SMILEY_MAN/smiley-man/view/SmileyManScreenView' );

  class SmileyManScreen extends Screen {

    /**
     * @param {Tandem} tandem
     */
    constructor( tandem ) {

      const options = {
        backgroundColorProperty: new Property( 'white' ),
        tandem: tandem
      };

      super(
        () => new SmileyManModel( tandem.createTandem( 'model' ) ),
        model => new SmileyManScreenView( model, tandem.createTandem( 'view' ) ),
        options
      );
    }
  }

  return smileyMan.register( 'SmileyManScreen', SmileyManScreen );
} );