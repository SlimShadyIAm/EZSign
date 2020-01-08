<template>
	<div class="content">
		<Header
			text="EZ-Sign - Transcribe"
			subtext="Using the camera app, you can record some sign language
                        and the app will Automagically translate it to written
                        text!"
		></Header>
		<div class="flex-container">
			<article class="message is-info">
				<div class="message-header">
					<p>Information</p>
				</div>
				<div class="message-body">
					Hello! My name is John Doe. This app will translate my sign
					language. Press
					<b>"Record Sign Langauge"</b> and record me!
				</div>
			</article>
			<!-- <input type="file" accept="video" class="button" value="Start Transcribing" /> -->
			<label for="file-upload" class="custom-file-upload button"
				>Record Sign Language</label
			>
			<input
				id="file-upload"
				type="file"
				accept="video"
				@change="handlePhrases"
			/>
		</div>
		<Transcribed
			:text="nextPhrase ? nextPhrase : 'Iced Coffee'"
			:modalActive="modalActive"
			v-on:close="modalActive = !modalActive"
		></Transcribed>
	</div>
</template>

<script>
import Header from "@/components/Header";
import Transcribed from "@/components/Transcribed";
// import VideoIcon from "vue-material-design-icons/Video.vue";

export default {
	name: "Transcribe",
	components: {
		Header,
		Transcribed
		// VideoIcon
	},
	mounted: function() {
		this.phrases = this.$store.getters.phrases;
		console.log(this.phrases);
	},
	data() {
		return {
			modalActive: false,
			nextIndex: 0,
			nextPhrase: "",
			phrases: []
		};
	},
	methods: {
		handlePhrases() {
			this.nextIndex = this.nextIndex % 3;
			this.nextPhrase = this.phrases[this.nextIndex];
			this.modalActive = !this.modalActive;
			this.nextIndex = this.nextIndex + 1;
		}
	}
};
</script>

<style>
.flex-container {
	margin: 0 20px;
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
}
.flex-container > *:last-child {
	align-self: flex-end;
}
input[type="file"] {
	display: none;
}
/* .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
} */
</style>
