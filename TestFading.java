import java.awt.Color;
public class TestFading
{
  public static void main (String[] args)
  {
    {  //pick two pictures
      String file1 = FileChooser.pickAFile();
      Picture startPicture = new Picture(file1);
      String file2 = FileChooser.pickAFile();
      Picture endPicture = new Picture(file2);
      //using if method for the picture
      if (startPicture.getWidth() == endPicture.getWidth() && startPicture.getHeight() == endPicture.getHeight())
      {
        Picture p1 = new Picture (startPicture.getWidth(),startPicture.getHeight());
        Picture p2 = new Picture (startPicture.getWidth(),startPicture.getHeight());
        Picture p3 = new Picture (startPicture.getWidth(),startPicture.getHeight());
        //using crossFade method that you write in picture object. 
        p1.crossFade(startPicture,endPicture,0.65);     
        p2.crossFade(startPicture,endPicture,0.85);
        p3.crossFade(startPicture,endPicture,0.5);
        startPicture.show();
        p1.show();
        p2.show();
        p3.show();
        endPicture.show();
      }
      else {
        System.out.println("The pictures that you selected are not same size.");
        }
    }
  }
}
    