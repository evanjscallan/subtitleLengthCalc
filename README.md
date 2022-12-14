# subtitleLengthCalc


By Evan Scallan

Origin Date: December 14, 2022

License: MIT

Language: Javascript

This project has no affiliation with Revolvdiv.


--HOW TO USE--

1.) PREPARE YOUR FILE

	a.)Prepare a .srt (SubRip) file. A good resource for audio transcription with .srt exporting can be found at Revoldiv.com.

		i.) ***IMPORTANT NOTE: For the current version of the software, make sure you have 6 LINES OF DIALOGUE TRANSCRIPTION for each segment. There are plans to update this program to make it flexible in the future. If using Revoldiv, an easy way to accomplish this is to export a file with:

			-42 Maximum Characters per line

			-2 Maximum Lines
		***

	b.)Duplicate the file and change the extension of the file to .txt. Make sure there are no spaces in the file.

	c.)Insert the duplicate file into the same folder as 'audioTimecodeLengthReader.js'

2.) ACQUIRE YOUR AUDIO TIMECODE LENGTH(S)

	a.) In 'audioTimecodeLengthReader.js', replace 'dummyText.txt' with your file name.

	b.) Run the code. Example output from 'dummyText.txt':

Time Differences: [

  '21.747 seconds',

  '20.518 seconds',

  '20.745 seconds',

  '14.185 seconds',

  '23.492 seconds',

  '37.327 seconds'
]


--WHAT'S HAPPENING?--

.srt files traditionally produce segments of audio transcriptions in the following format:

1
00:00:00,00 --> 00:00:21,747
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus augue quis 
diam egestas aliquet. Curabitur volutpat malesuada ipsum, nec fringilla magna mollis 
ornare. Aliquam luctus condimentum nunc vel sagittis. Morbi varius quam nisl, ac 
tristique est mattis sit amet. Sed nisi velit, eleifend ac molestie eget, semper sed
augue. Cras aliquet mi lacus, eget varius leo tempor eu. Integer eget suscipit ipsum,
nec ullamcorper lacus. Nullam pharetra mi sem, et facilisis lorem finibus sit amet. 

--FINAL NOTES--

The project is in an early phase with expected updates to make the program more user-friendly with features such as file conversions and flexible transcription line choices. If you would like to contribute, please feel free to reach out to EvanJScallan@gmail.com for more information. Happy transcribing!