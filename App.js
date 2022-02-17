import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,Image } from 'react-native';
import Svg, { Path } from "react-native-svg"
export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
      >
      <Path d="M102.725 399.774H173.019V447.504H20.0605L97.3847 313.762H24.6681V265.784H180.049L102.725 399.774Z" fill="white"/>
      <Path d="M204.28 265.796H252.033V447.516H204.28V265.796Z" fill="white"/>
      <Path d="M464.382 265.796L381.482 348.904L479.894 447.516H412.506L347.788 383.065L336.399 394.697V447.516H288.646V265.796H336.399V327.093L397.49 265.796H464.382Z" fill="white"/>
      <Path d="M512.608 304.067C502.188 304.067 493.457 295.825 493.457 285.41C493.457 274.995 502.188 265.784 512.608 265.784C523.028 265.784 531.759 274.995 531.759 285.41C531.759 285.41 532.964 306.736 512.608 323.929V304.067Z" fill="white"/>
      <Path d="M147.548 645L135.072 632.766C121.876 640.678 106.281 645 89.9772 645C40.2984 645 0 604.721 0 555.079C0 505.436 40.2984 465.158 89.9654 465.158C139.621 465.158 179.931 505.436 179.931 555.079C179.931 571.386 175.607 586.489 167.939 599.679L213.519 645H147.548ZM89.9654 598.002C93.0844 598.002 96.2033 597.766 99.086 597.046L77.017 574.988L110.369 541.901L131.965 563.475C132.438 560.841 132.686 558.196 132.686 555.327C132.686 531.344 113.972 512.639 89.989 512.639C65.9943 512.639 47.2806 531.344 47.2806 555.327C47.257 579.298 65.9707 598.002 89.9654 598.002Z" fill="white"/>
      <Path d="M269.412 573.299C269.412 586.253 279.962 596.798 292.922 596.798C305.871 596.798 316.432 586.253 316.432 573.299V465.158H363.937V574.02C363.937 613.578 332.027 645 292.922 645C253.333 645 221.907 613.59 221.907 574.02V465.158H269.412V573.299Z" fill="white"/>
      <Path d="M399.912 465.158H511.71V504.244H447.169V533.493H504.267V573.299H447.169V606.386H511.698V644.988H399.912V465.158Z" fill="white"/>
      <Path d="M611.741 520.315C611.741 512.887 605.503 506.652 598.072 506.652C590.641 506.652 584.639 512.887 584.639 520.315C584.639 527.742 590.629 533.741 598.06 533.741C615.569 533.741 631.412 542.137 641.489 555.079C649.169 564.667 653.481 576.665 653.481 589.843C653.481 620.533 628.765 644.988 598.06 644.988C567.355 644.988 542.64 620.769 542.64 589.123H584.627C584.627 596.798 590.629 602.785 598.06 602.785C605.491 602.785 611.729 596.786 611.729 589.359C611.729 581.931 605.491 575.696 598.06 575.696C567.355 575.696 542.888 551.241 542.888 520.551C542.888 489.861 567.355 465.158 598.06 465.158C628.765 465.158 653.481 489.613 653.481 520.303H611.741V520.315Z" fill="white"/>
      <Path d="M683.217 464.921H825V511.919H777.259V645H730.002V511.919H683.217V464.921Z" fill="white"/>
      <Path d="M416.866 64.7574C594.587 64.7574 739.17 209.269 739.17 386.903C739.17 406.8 737.339 426.273 733.877 445.178H799.611C802.482 426.06 803.959 406.588 803.959 386.903C803.959 283.556 763.696 186.396 690.578 113.326C617.46 40.2431 520.264 0 416.866 0C313.467 0 216.26 40.2431 143.153 113.326C103.422 153.037 73.4257 199.858 54.2866 250.917H124.735C176.115 141.064 287.736 64.7574 416.866 64.7574Z" fill="#57CEE2"/>
      <Path d="M417.669 127.885C560.113 127.885 675.999 243.714 675.999 386.088C675.999 406.411 673.624 426.19 669.17 445.178H735.354C738.91 426.013 740.788 406.269 740.788 386.088C740.788 208.017 595.839 63.1397 417.681 63.1397C287.771 63.1397 175.548 140.166 124.274 250.917H197.676C243.196 177.162 324.785 127.885 417.669 127.885Z" fill="#F9075F"/>
      <Path d="M417.669 192.643C524.387 192.643 611.21 279.423 611.21 386.088C611.21 406.682 607.961 426.544 601.959 445.178H669.159C673.624 426.19 675.987 406.411 675.987 386.088C675.987 243.714 560.101 127.885 417.657 127.885C324.762 127.885 243.173 177.15 197.652 250.917H279.348C314.531 214.984 363.536 192.643 417.669 192.643Z" fill="#FFAC00"/>
      <Path d="M108.573 188.557C118.485 170.431 130.795 153.769 144.134 138.005C157.543 122.3 172.181 107.587 188.023 94.2195C195.986 87.595 204.138 81.1712 212.668 75.2433C221.151 69.2683 229.87 63.6002 238.884 58.4163C256.83 47.895 275.744 39.0269 295.356 31.8828C314.967 24.6324 335.335 19.5548 355.963 16.0241C358.538 15.5399 361.137 15.2565 363.725 14.8786C366.324 14.5598 368.899 14.0993 371.51 13.8867C376.72 13.379 381.919 12.8122 387.141 12.576C392.363 12.2217 397.584 12.1391 402.806 12.0092C408.028 12.0682 413.25 12.0328 418.472 12.269C439.336 13.0956 460.07 15.7406 480.402 20.0625C490.574 22.1999 500.616 24.845 510.529 27.8679C520.417 30.9853 530.211 34.3862 539.627 38.7553L539.178 39.9715C499.27 30.3477 458.64 25.3763 418.2 25.2228C408.087 25.1284 397.998 25.4354 387.92 26.0376C377.843 26.5454 367.801 27.5137 357.794 28.7181L350.292 29.71C347.787 30.017 345.318 30.513 342.825 30.9027C337.828 31.6584 332.901 32.7212 327.951 33.7367C325.47 34.1972 323.048 34.9057 320.579 35.4725C318.134 36.0984 315.665 36.6298 313.243 37.3265C308.411 38.7553 303.496 39.9952 298.735 41.672C279.537 47.9895 260.823 56.031 243.007 65.7494C234.052 70.5318 225.356 75.8101 216.862 81.3955C208.332 86.9337 200.133 92.9796 192.111 99.2381C176.02 111.731 161.004 125.654 147.123 140.638C140.188 148.149 133.572 155.954 127.275 164.019C121.013 172.096 114.964 180.409 109.707 189.159L108.573 188.557Z" fill="white"/>
      <Path d="M182.317 194.674C188.508 186.065 195.443 178.083 202.709 170.384C209.975 162.685 217.63 155.34 225.605 148.326C233.615 141.359 241.944 134.722 250.592 128.523C259.275 122.359 268.254 116.585 277.481 111.2C282.124 108.555 286.743 105.863 291.516 103.43C296.207 100.844 301.062 98.565 305.882 96.1797C315.641 91.7043 325.754 87.9492 336.151 85.1978C346.559 82.5055 357.133 80.439 367.813 79.4235C378.457 78.2072 389.22 78.16 399.853 79.0102L399.959 80.2973C389.669 83.1431 379.497 85.4458 369.514 88.3743C359.495 91.0902 349.678 94.3257 339.919 97.5849C335.064 99.2853 330.184 100.915 325.376 102.722C320.509 104.375 315.724 106.264 310.868 107.988C301.216 111.601 291.705 115.687 282.443 120.304C273.228 125.028 264.202 130.141 255.412 135.679C246.575 141.146 238.01 147.074 229.704 153.368C213.034 165.861 197.298 179.842 183.357 195.465L182.317 194.674Z" fill="white"/>
      <Path d="M270.416 194.591C277.481 187.057 285.337 180.35 293.536 174.021C297.683 170.927 301.901 167.892 306.26 165.058C308.422 163.606 310.667 162.283 312.9 160.961C315.145 159.626 317.366 158.257 319.693 157.064C321.997 155.824 324.277 154.537 326.581 153.262L333.622 149.66C335.973 148.444 338.466 147.535 340.947 146.649C343.452 145.799 345.956 144.937 348.579 144.476C351.19 143.968 353.801 143.484 356.424 143.095C359.07 142.776 361.752 142.681 364.41 142.587C365.745 142.551 367.068 142.528 368.391 142.54C369.726 142.599 371.073 142.764 372.408 142.906C375.09 143.26 377.725 143.591 380.347 144.264L380.454 145.551C370.683 150.215 361.421 153.167 352.241 156.899C349.914 157.654 347.657 158.646 345.318 159.414C344.16 159.815 342.979 160.17 341.798 160.524C340.604 160.831 339.435 161.209 338.265 161.61L331.141 163.783C328.79 164.586 326.475 165.507 324.147 166.416C321.808 167.29 319.551 168.353 317.271 169.38C314.991 170.407 312.699 171.411 310.478 172.568C305.93 174.706 301.476 177.044 297.045 179.465C288.196 184.318 279.548 189.679 271.255 195.571L270.416 194.591Z" fill="white"/>

      </Svg>
      </View>
      <View>
        
      </View>
      <View>
      <Button
          title="Se connecter"
          color="#5BC9D7"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button
          title='Créer un compte'
          color="#E43F6F"
        />
      </View>

        <Text>test</Text>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFB100',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
