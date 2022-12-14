# subtitleLengthCalc


By Evan Scallan
Origin Date: December 14, 2022
License: MIT
Language: Javascript

This project has not affiliation with Revolvdiv.


--HOW TO USE--

1.) PREPARE YOUR FILE
	a.)Prepare a .srt (SubRip) file. A good resource for audio transcription with .srt exporting can be found at Revoldiv.com.
		i.) ***IMPORTANT NOTE: For the current version of the software, make sure you have 6 LINES OF DIALOGUE TRANSCRIPTION for each segment. There are plans to update this program to make it flexible in the future. If using Revoldiv, an easy way to accomplish this is to export a file with:
			-42 Maximum Characters per line
			-2 Maximum Lines
		***

	b.)Duplicate the file and change the extension of the file to .txt. Make sure there are no spaces in the file.

	c.)Insert the duplicate file into the same folder as 'audioTimecodeLengthReader.js'

2.) GET YOUR TIMECODE LENGTHS
	a.) In 'audioTimecodeLengthReader.js', replace 'dummyText.txt' with your file name.
	b.) Run the code. Example output from 'dummyText.txt':

Time Differences [
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

2
00:00:21,747 --> 00:00:42,265
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus augue quis 
diam egestas aliquet. Curabitur volutpat malesuada ipsum, nec fringilla magna mollis 
ornare. Aliquam luctus condimentum nunc vel sagittis. Morbi varius quam nisl, ac 
tristique est mattis sit amet. Sed nisi velit, eleifend ac molestie eget, semper sed
augue. Cras aliquet mi lacus, eget varius leo tempor eu. Integer eget suscipit ipsum,
nec ullamcorper lacus. Nullam pharetra mi sem, et facilisis lorem finibus sit amet. 

3
00:00:42,265 --> 00:01:03,010
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus augue quis 
diam egestas aliquet. Curabitur volutpat malesuada ipsum, nec fringilla magna mollis 
ornare. Aliquam luctus condimentum nunc vel sagittis. Morbi varius quam nisl, ac 
tristique est mattis sit amet. Sed nisi velit, eleifend ac molestie eget, semper sed
augue. Cras aliquet mi lacus, eget varius leo tempor eu. Integer eget suscipit ipsum,
nec ullamcorper lacus. Nullam pharetra mi sem, et facilisis lorem finibus sit amet. 

4
00:01:03,010 --> 00:01:17,195
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus augue quis 
diam egestas aliquet. Curabitur volutpat malesuada ipsum, nec fringilla magna mollis 
ornare. Aliquam luctus condimentum nunc vel sagittis. Morbi varius quam nisl, ac 
tristique est mattis sit amet. Sed nisi velit, eleifend ac molestie eget, semper sed
augue. Cras aliquet mi lacus, eget varius leo tempor eu. Integer eget suscipit ipsum,
nec ullamcorper lacus. Nullam pharetra mi sem, et facilisis lorem finibus sit amet. 

5
00:01:17,195 --> 00:01:40,687
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus augue quis 
diam egestas aliquet. Curabitur volutpat malesuada ipsum, nec fringilla magna mollis 
ornare. Aliquam luctus condimentum nunc vel sagittis. Morbi varius quam nisl, ac 
tristique est mattis sit amet. Sed nisi velit, eleifend ac molestie eget, semper sed
augue. Cras aliquet mi lacus, eget varius leo tempor eu. Integer eget suscipit ipsum,
nec ullamcorper lacus. Nullam pharetra mi sem, et facilisis lorem finibus sit amet. 

6
00:01:40,687 --> 00:02:18,014
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dapibus augue quis 
diam egestas aliquet. Curabitur volutpat malesuada ipsum, nec fringilla magna mollis 
ornare. Aliquam luctus condimentum nunc vel sagittis. Morbi varius quam nisl, ac 
tristique est mattis sit amet. Sed nisi velit, eleifend ac molestie eget, semper sed
augue. Cras aliquet mi lacus, eget varius leo tempor eu. Integer eget suscipit ipsum,
nec ullamcorper lacus. Nullam pharetra mi sem, et facilisis lorem finibus sit amet. 








1.) Open 'audioTimecodeLengthReader.js'
2.) 