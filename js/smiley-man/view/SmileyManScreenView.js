// Copyright 2020, University of Colorado Boulder
// ctrl S is save
/**
 * @author Erik Reid
 */
define( require => {
  'use strict';

  // modules
  const Circle = require( 'SCENERY/nodes/Circle' );
  const Rectangle = require( 'SCENERY/nodes/Rectangle' );
  const ResetAllButton = require( 'SCENERY_PHET/buttons/ResetAllButton' );
  const ScreenView = require( 'JOIST/ScreenView' );
  const smileyMan = require( 'SMILEY_MAN/smileyMan' );
  const SmileyManConstants = require( 'SMILEY_MAN/common/SmileyManConstants' );

  class SmileyManScreenView extends ScreenView {

    /**
     * @param {SmileyManModel} model
     * @param {Tandem} tandem
     */
    constructor( model, tandem ) {



      super( {
        tandem: tandem
      } );

      const resetAllButton = new ResetAllButton( {
        listener: () => {
          this.interruptSubtreeInput(); // cancel interactions that may be in progress
          model.reset();
          this.reset();
        },
        right: this.layoutBounds.maxX - SmileyManConstants.SCREEN_VIEW_X_MARGIN,
        bottom: this.layoutBounds.maxY - SmileyManConstants.SCREEN_VIEW_Y_MARGIN,
        tandem: tandem.createTandem( 'resetAllButton' )
      } );
      this.addChild( resetAllButton );

      const circle = new Circle( 470, {
        fill: 'blue',
        stroke: 'green',
        lineWidth: 0,
        centerX: 500,
        centerY: 300
      } );
      this.addChild( circle );

      const rectangle = new Rectangle( 320, 400, 400, 180, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0
      } );
      this.addChild( rectangle );


      
            const eye = new Circle( 75, {
        fill: 'green',
        stroke: 'green',
        lineWidth: 51,
        centerX: 500,
        centerY: 50
      } );
      this.addChild( eye );

      const SL = new Rectangle( 230, 200, 150, 375, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0
      } );
      this.addChild( SL );


const SR = new Rectangle( 650, 200, 150, 375, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0
      } );
      this.addChild( SR );

    }

    /**
     * Resets the view.
     * @public
     */
    reset() {
      //TODO
    }

    /**
     * Steps the view.
     * @param {number} dt - time step, in seconds
     * @public
     */
    step( dt ) {
      //TODO
    }
  }

  return smileyMan.register( 'SmileyManScreenView', SmileyManScreenView );
} );
