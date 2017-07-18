import java.io.FileOutputStream;
import java.net.URL;
import java.nio.channels.Channels;
import java.nio.channels.ReadableByteChannel;

/**
 * Created by Administrator on 2017-07-06.
 */
public class main {

    public static void main(String[] arg)throws Exception{
        URL url = new URL("https://www.edument.se");
        ReadableByteChannel rbc = Channels.newChannel(url.openStream());
        FileOutputStream fos = new FileOutputStream("edument.html");
        fos.getChannel().transferFrom(rbc, 0, Long.MAX_VALUE);
    }
}
