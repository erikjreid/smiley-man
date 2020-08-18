// Copyright 2020, University of Colorado Boulder
// ctrl S is save
/**
 * @author Erik Reid
 */
define( require => {
  'use strict';

  // modules
  const Property = require('AXON/Property');
  const VerticalAquaRadioButtonGroup = require('SUN/VerticalAquaRadioButtonGroup');
  const Circle = require( 'SCENERY/nodes/Circle' );
  const Text = require( 'SCENERY/nodes/Text' );
  const Path = require( 'SCENERY/nodes/Path' );
   const Node = require( 'SCENERY/nodes/Node' );
const Shape = require( 'KITE/Shape' );
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

const property = new Property('happy');
const items = [
{node: new Text('Happy',{fontSize: 12}),value: 'happy'},
{node: new Text('Sad',{fontSize:12}),value: 'sad'},
{node: new Text('angry',{fontSize: 12}),value: 'angry'},
];
      const radioButtonGroup = new VerticalAquaRadioButtonGroup(property,items,{
centerY: this.layoutBounds.centerY,
left:this.layoutBounds.left,
scale:4
      });

const face = new Node();
this.addChild(face);
property.link( emotion =>{

  console.log(emotion);
face.removeAllChildren();
  if (emotion==='happy'){

      const circle = new Circle( 280, {
        fill: 'blue',
        stroke: 'green',
        lineWidth: 0,
        centerX: 500,
        centerY: 340
      } );
      face.addChild( circle );

      
        const bubble = new Circle( 20, {
        fill: 'white',
        stroke: 'black',
        lineWidth: 10,
        centerX: 800,
        centerY: 200
      } );
      face.addChild( bubble );

        const b = new Circle( 20, {
        fill: 'white',
        stroke: 'black',
        lineWidth: 10,
        centerX: 870,
        centerY: 160
      } );
      face.addChild( b );


        const thoughts = new Circle( 70, {
        fill: 'white',
        stroke: 'black',
        lineWidth: 12,
        centerX: 950,
        centerY: 90
      } );
      face.addChild( thoughts );

      const thoughtWords=new Text("I'm a Happy cyclops",{
        fontSize: 14,
        center:thoughts.center
      });
      face.addChild (thoughtWords);



      const rectangle = new Rectangle( 380, 400, 260, 110, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0
      } );
      face.addChild( rectangle );


      
            const eye = new Circle( 40, {
        fill: 'green',
        stroke: 'green',
        lineWidth: 51,
        centerX: 500,
        centerY: 200
      } );
      face.addChild( eye );

      const pupil = new Circle( 20, {
        fill: 'black',
        stroke: 'green',
        lineWidth: 0,
        center:eye.center
      } );
      this.addChild( pupil );


      const SL = new Rectangle( 230, 250, 80, 260, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0,
        right:rectangle.left
      } );
      face.addChild( SL );


const SR = new Rectangle( 650, 250, 80, 260, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0,
left:rectangle.right
      } );
      face.addChild( SR );

  }else if (emotion==='sad'){const circle = new Circle( 280, {
        fill: 'blue',
        stroke: 'green',
        lineWidth: 0,
        centerX: 500,
        centerY: 340
      } );
      face.addChild( circle );


        const bubble = new Circle( 20, {
        fill: 'white',
        stroke: 'black',
        lineWidth: 10,
        centerX: 800,
        centerY: 200
      } );
      face.addChild( bubble );

        const b = new Circle( 20, {
        fill: 'white',
        stroke: 'black',
        lineWidth: 10,
        centerX: 870,
        centerY: 160
      } );
      face.addChild( b );


        const thoughts = new Circle( 70, {
        fill: 'white',
        stroke: 'black',
        lineWidth: 12,
        centerX: 950,
        centerY: 90
      } );
      face.addChild( thoughts );

      const thoughtWords=new Text("I'm a Sad cyclops",{
        fontSize: 14,
        center:thoughts.center
      });
      face.addChild (thoughtWords);



      const rectangle = new Rectangle( 380, 250, 260, 110, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0
      } );
      face.addChild( rectangle );


      
            const eye = new Circle( 40, {
        fill: 'green',
        stroke: 'green',
        lineWidth: 51,
        centerX: 500,
        centerY: 150
      } );
      face.addChild( eye );

    


      const SL = new Rectangle( 230, 250, 80, 260, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0,
        right:rectangle.left
      } );
      face.addChild( SL );


const SR = new Rectangle( 650, 250, 80, 260, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0,
left:rectangle.right
      } );
      face.addChild( SR );

  }
  if (emotion==='angry'){

      const circle = new Circle( 280, {
        fill: 'blue',
        stroke: 'green',
        lineWidth: 0,
        centerX: 500,
        centerY: 340
      } );
      face.addChild( circle );


        const bubble = new Circle( 20, {
        fill: 'white',
        stroke: 'black',
        lineWidth: 10,
        centerX: 800,
        centerY: 200
      } );
      face.addChild( bubble );

        const b = new Circle( 20, {
        fill: 'white',
        stroke: 'black',
        lineWidth: 10,
        centerX: 870,
        centerY: 160
      } );
      face.addChild( b );


        const thoughts = new Circle( 70, {
        fill: 'white',
        stroke: 'black',
        lineWidth: 12,
        centerX: 950,
        centerY: 90
      } );
      face.addChild( thoughts );

      const thoughtWords=new Text("I'm an angry cyclops",{
        fontSize: 14,
        center:thoughts.center
      });

face.addChild (thoughtWords);

      const rectangle = new Rectangle( 325, 400, 340, 110, {
        fill: 'yellow',
        stroke: 'red',
        lineWidth: 15
      } );
      face.addChild( rectangle );

       const teeth = new Rectangle( 325, 400, 4, 105, {
        fill: 'black',
        stroke: 'red',
        lineWidth: 0,
        centerX:rectangle.centerX+58,
        centerY:rectangle.centerY
      } );
      face.addChild( teeth );

      const teet = new Rectangle( 325, 400, 4, 105, {
        fill: 'black',
        stroke: 'red',
        lineWidth: 0,
                centerX:rectangle.centerX,
        centerY:rectangle.centerY 
      } );
      face.addChild( teet );

      const t = new Rectangle( 325, 400, 4, 105, {
        fill: 'black',
        stroke: 'red',
        lineWidth: 0,
                centerX:rectangle.centerX-51,
        centerY:rectangle.centerY
      } );
      face.addChild( t );


const te = new Rectangle( 325, 400, 4, 105, {
        fill: 'black',
        stroke: 'red',
        lineWidth: 0,
                centerX:rectangle.centerX+97,
        centerY:rectangle.centerY
      } );
      face.addChild( te );


const tee = new Rectangle( 325, 400, 4, 105, {
        fill: 'black',
        stroke: 'red',
        lineWidth: 0,
                centerX:rectangle.centerX-94,
        centerY:rectangle.centerY
      } );
      face.addChild( tee );


      
            const eye = new Circle( 40, {
        fill: 'red',
        stroke: 'red',
        lineWidth: 51,
        centerX: 500,
        centerY: 200
      } );
      face.addChild( eye );

      const pupil = new Circle( 20, {
        fill: 'black',
        stroke: 'green',
        lineWidth: 0,
        center:eye.center
      } );
      this.addChild( pupil );


      const SL = new Rectangle( 230, 250, 80, 260, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0,
        right:rectangle.left
      } );
      


const SR = new Rectangle( 650, 250, 80, 260, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0,
left:rectangle.right
      } );
      

  }
});

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

      const H = new Rectangle( 790, 250, 80, 260, {
        fill: 'yellow',
        stroke: 'green',
        lineWidth: 0,
left:200
      } );
      
this.addChild( H );



      this.addChild(radioButtonGroup);

      const shape = new Shape();
      shape.moveTo(0,0);
      shape.lineTo(140,130);
      shape.lineTo(1090,300);
      //shape.lineTo(0,0);
      //shape.arc(30,200,60,21,Math.PI,true)
      //shape.close();
      const path = new Path(shape,{
        lineWidth:5,
        fill:'yellow',
        stroke:'black'
      });
      this.addChild(path);
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
