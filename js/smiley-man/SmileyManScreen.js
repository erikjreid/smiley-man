// Copyright 2020, University of Colorado Boulder

/**
 * @author Erik Reid
 */

import Property from '../../../axon/js/Property.js';
import Screen from '../../../joist/js/Screen.js';
import SmileyManModel from './SMILEY_MAN/smiley-man/model/SmileyManModel.js';
import SmileyManScreenView from './SMILEY_MAN/smiley-man/view/SmileyManScreenView.js';
import smileyMan from './SMILEY_MAN/smileyMan.js';

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

smileyMan.register( 'SmileyManScreen', SmileyManScreen );
export default SmileyManScreen;