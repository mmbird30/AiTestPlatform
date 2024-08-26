package com.yupi.yudada.model.dto.question;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 答案题目封装类（用于AI评分）
 *
 */
@Data
@NoArgsConstructor
@AllArgsConstructor
public class QuestionAnswerDTO {

    /**
     * 题目
     */
    private String title;

    /**
     * 答案
     */
    private String userAnswer;
}
