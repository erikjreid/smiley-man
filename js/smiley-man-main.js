// Copyright 2020, University of Colorado Boulder

/**
 * Main entry point for the sim.
 *
 * @author Erik Reid
 */
define( require => {
  'use strict';

  // modules
  const Sim = require( 'JOIST/Sim' );
  const SimLauncher = require( 'JOIST/SimLauncher' );
  const SmileyManScreen = require( 'SMILEY_MAN/smiley-man/SmileyManScreen' );
  const Tandem = require( 'TANDEM/Tandem' );

  // strings
  const smileyManTitleString = require( 'string!SMILEY_MAN/smiley-man.title' );

  const simOptions = {
    credits: {
      //TODO fill in credits, all of these fields are optional, see joist.CreditsNode
      leadDesign: '',
      softwareDevelopment: '',
      team: '',
      qualityAssurance: '',
      graphicArts: '',
      soundDesign: '',
      thanks: ''
    }
  };

  // launch the sim - beware that scenery Image nodes created outside of SimLauncher.launch() will have zero bounds
  // until the images are fully loaded, see https://github.com/phetsims/coulombs-law/issues/70
  SimLauncher.launch( () => {
    const sim = new Sim( smileyManTitleString, [
      new SmileyManScreen( Tandem.ROOT.createTandem( 'smileyManScreen' ) )
    ], simOptions );
    sim.start();
  } );
} );